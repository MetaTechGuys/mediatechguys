"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import "./Aslider.scss";

export type AsliderItem = {
  id: string | number;
  imageSrc: string;
  imageAlt?: string;
  title: string; // staff name
  subtitle?: string; // job title
};

type AsliderProps = {
  items: AsliderItem[];
  visible?: number; // how many slides visible at once (desktop)
  loop?: boolean;
};

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

const Aslider: React.FC<AsliderProps> = ({
  items,
  visible = 3,
  loop = true,
}) => {
  const [active, setActive] = useState(0);

  const count = items.length;
  // Allow up to 9 (or more) visible cards; previously capped at 9
  const visRaw = clamp(visible, 1, Math.max(1, Math.min(11, count)));
  // Force an odd number of visible items so active can sit exactly in the middle
  const vis = visRaw % 2 === 1 ? visRaw : clamp(visRaw + 1, 1, count);

  const canPrev = loop || active > 0;
  const canNext = loop || active < count - 1;

  const goPrev = () => {
    if (count === 0) return;
    if (loop) setActive((p) => (p - 1 + count) % count);
    else setActive((p) => clamp(p - 1, 0, count - 1));
  };

  const goNext = () => {
    if (count === 0) return;
    if (loop) setActive((p) => (p + 1) % count);
    else setActive((p) => clamp(p + 1, 0, count - 1));
  };

  // Compute the start index so active slide tends to be centered when possible
  const startIndex = useMemo(() => {
    const half = Math.floor(vis / 2);
    let start = active - half;
    if (!loop) {
      start = clamp(start, 0, Math.max(0, count - vis));
    }
    return start;
  }, [active, vis, count, loop]);

  // Build an array of indexes to render (supports looping)
  const indexes = useMemo(() => {
    const out: number[] = [];
    for (let i = 0; i < Math.min(vis, count); i++) {
      const idx = loop ? (startIndex + i + count) % count : startIndex + i;
      if (idx >= 0 && idx < count) out.push(idx);
    }
    return out;
  }, [startIndex, vis, count, loop]);

  return (
    <section
      className="aslider"
      aria-roledescription="carousel"
      style={{ ["--visible" as any]: vis }}
    >
      <button
        type="button"
        className="aslider__nav aslider__nav--prev"
        aria-label="Previous"
        onClick={goPrev}
        disabled={!canPrev}
      >
        ‹
      </button>

      <div className="aslider__viewport">
        <div className="aslider__track">
          {indexes.map((idx) => {
            const item = items[idx];
            const isActive = idx === active;
            // Compute signed distance from active in a circular list
            let delta = (idx - active + count) % count;
            if (delta > count / 2) delta -= count; // now delta in (-count/2, count/2]
            const isNearLeft = delta === -1;
            const isNearRight = delta === 1;
            const isLeftSide = delta < 0;
            const isRightSide = delta > 0;
            const depth = Math.min(Math.abs(delta), 4);
            const classes = [
              "aslider__slide",
              isActive ? "is-center" : "",
              isNearLeft ? "is-near-left" : "",
              isNearRight ? "is-near-right" : "",
              isLeftSide ? "is-left" : "",
              isRightSide ? "is-right" : "",
              `depth-${depth}`,
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <div
                key={item.id}
                className={classes}
                style={{ zIndex: 100 - Math.abs(delta) }}
                onClick={() => setActive(idx)}
              >
                <div className="aslider__imageWrap">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt ?? item.title}
                    fill
                    sizes="(max-width: 820px) 80vw, 25vw"
                    className="aslider__image"
                  />
                </div>
                <div className="aslider__meta" aria-hidden={!isActive}>
                  <h3 className="aslider__title">{item.title}</h3>
                  {item.subtitle && (
                    <p className="aslider__subtitle">{item.subtitle}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="aslider__nav aslider__nav--next"
        aria-label="Next"
        onClick={goNext}
        disabled={!canNext}
      >
        ›
      </button>
    </section>
  );
};

export default Aslider;
