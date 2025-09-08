"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./Clcover.scss";

export type ClcoverSlide = {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  altImage?: string;
};

type ClcoverProps = {
  slides: ClcoverSlide[];
};

const Clcover: React.FC<ClcoverProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isAnimatingRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);

  const clamp = useCallback(
    (idx: number) => Math.max(0, Math.min(idx, slides.length - 1)),
    [slides.length]
  );

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimatingRef.current) return;
      const next = clamp(idx);
      if (next === activeIndex) return;
      isAnimatingRef.current = true;
      setActiveIndex(next);
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, 600);
    },
    [activeIndex, clamp]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isAnimatingRef.current) return;
      if (Math.abs(e.deltaY) < 6) return;
      const atFirst = activeIndex === 0;
      const atLast = activeIndex === slides.length - 1;
      const down = e.deltaY > 0;
      const canNav = (down && !atLast) || (!down && !atFirst);
      if (canNav) {
        e.preventDefault();
        if (down) goNext();
        else goPrev();
      }
    };
    const node = containerRef.current;
    if (node)
      node.addEventListener(
        "wheel",
        onWheel as EventListener,
        { passive: false } as AddEventListenerOptions
      );
    return () => {
      if (node) node.removeEventListener("wheel", onWheel as EventListener);
    };
  }, [activeIndex, slides.length, goNext, goPrev]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const onTouchStart = (e: TouchEvent) => {
      touchStartXRef.current = e.touches[0]?.clientX ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isAnimatingRef.current) return;
      const startX = touchStartXRef.current;
      if (startX == null) return;
      const dx = startX - (e.touches[0]?.clientX ?? startX);
      if (Math.abs(dx) < 24) return;
      const atFirst = activeIndex === 0;
      const atLast = activeIndex === slides.length - 1;
      const swipeLeft = dx > 0; // go next
      const canNav = (swipeLeft && !atLast) || (!swipeLeft && !atFirst);
      if (canNav) {
        e.preventDefault();
        if (swipeLeft) goNext();
        else goPrev();
      }
      touchStartXRef.current = null;
    };
    node.addEventListener(
      "touchstart",
      onTouchStart as EventListener,
      { passive: true } as AddEventListenerOptions
    );
    node.addEventListener(
      "touchmove",
      onTouchMove as EventListener,
      { passive: false } as AddEventListenerOptions
    );
    return () => {
      node.removeEventListener("touchstart", onTouchStart as EventListener);
      node.removeEventListener("touchmove", onTouchMove as EventListener);
    };
  }, [activeIndex, slides.length, goNext, goPrev]);

  return (
    <section className="clcover" ref={containerRef}>
      <div className="clcover-track">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`clcover-slide ${
              idx === activeIndex ? "is-active" : ""
            }`}
            aria-hidden={idx !== activeIndex}
          >
            <div className="clcover-left">
              <div className="clcover-text">
                <h2 className="clcover-title">{s.title}</h2>
                {s.subtitle && (
                  <h3 className="clcover-subtitle">{s.subtitle}</h3>
                )}
                {s.description && (
                  <p className="clcover-description">{s.description}</p>
                )}
              </div>
            </div>
            <div className="clcover-right">
              <Image
                src={s.imageSrc}
                alt={s.altImage ?? s.title}
                fill
                className="clcover-image"
                sizes="(max-width: 820px) 100vw, 80vw"
                priority={idx === activeIndex}
              />
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="clcover-nav">
          <button
            type="button"
            className="clcover-btn"
            aria-label="Previous"
            onClick={goPrev}
            disabled={activeIndex === 0}
          >
            ←
          </button>
          <button
            type="button"
            className="clcover-btn"
            aria-label="Next"
            onClick={goNext}
            disabled={activeIndex === slides.length - 1}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
};

export default Clcover;
