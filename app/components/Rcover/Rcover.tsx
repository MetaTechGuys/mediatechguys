"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import "./Rcover.scss";

type RcoverDoubleSlide = {
  kind: "double";
  topSrc: string;
  leftSrc: string;
  rightSrc: string;
  altTop?: string;
  altLeft?: string;
  altRight?: string;
};

type RcoverContentSlide = {
  kind: "content";
  topSrc: string;
  imageSrc: string; // left image
  title?: string;
  subtitle?: string;
  description?: string;
  altTop?: string;
  altImage?: string;
};

type RcoverSlide = RcoverDoubleSlide | RcoverContentSlide;

type LegacyProps = {
  topSrc?: string;
  leftSrc?: string;
  rightSrc?: string;
  altTop?: string;
  altLeft?: string;
  altRight?: string;
  priorityTop?: boolean;
  prioritySides?: boolean;
};

type SliderProps = {
  slides?: RcoverSlide[];
  priorityTop?: boolean;
  prioritySides?: boolean;
};

type RcoverProps = LegacyProps & SliderProps;

const Rcover = (props: RcoverProps) => {
  const {
    slides,
    // legacy
    topSrc,
    leftSrc,
    rightSrc,
    altTop = "Top image",
    altLeft = "Left image",
    altRight = "Right image",
    priorityTop = false,
    prioritySides = false,
  } = props;

  const computedSlides: RcoverSlide[] = useMemo(() => {
    if (slides && slides.length > 0) return slides;
    // Backward-compatible single slide (first slide style)
    if (topSrc && leftSrc && rightSrc) {
      return [
        {
          kind: "double",
          topSrc,
          leftSrc,
          rightSrc,
          altTop,
          altLeft,
          altRight,
        },
      ];
    }
    return [];
  }, [slides, topSrc, leftSrc, rightSrc, altTop, altLeft, altRight]);

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  const clampIndex = useCallback(
    (idx: number) => Math.max(0, Math.min(idx, computedSlides.length - 1)),
    [computedSlides.length]
  );

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimatingRef.current) return;
      const next = clampIndex(idx);
      if (next === activeIndex) return;
      isAnimatingRef.current = true;
      setActiveIndex(next);
      // unlock after transition
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, 600);
    },
    [activeIndex, clampIndex]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isAnimatingRef.current) return;
      if (Math.abs(e.deltaY) < 6) return;
      const isAtFirst = activeIndex === 0;
      const isAtLast = activeIndex === computedSlides.length - 1;
      const scrollingDown = e.deltaY > 0;
      const canNavigate =
        (scrollingDown && !isAtLast) || (!scrollingDown && !isAtFirst);
      if (canNavigate) {
        e.preventDefault();
        if (scrollingDown) goNext();
        else goPrev();
      }
      // else: allow default to bubble so page can scroll
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
  }, [goNext, goPrev, activeIndex, computedSlides.length]);

  // touch
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isAnimatingRef.current) return;
      const startY = touchStartYRef.current;
      if (startY == null) return;
      const dy = startY - (e.touches[0]?.clientY ?? startY);
      if (Math.abs(dy) < 24) return;
      const isAtFirst = activeIndex === 0;
      const isAtLast = activeIndex === computedSlides.length - 1;
      const swipingDown = dy > 0; // goes to next
      const canNavigate =
        (swipingDown && !isAtLast) || (!swipingDown && !isAtFirst);
      if (canNavigate) {
        e.preventDefault();
        if (swipingDown) goNext();
        else goPrev();
      }
      // reset start so next gesture can be detected
      touchStartYRef.current = null;
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
  }, [goNext, goPrev, activeIndex, computedSlides.length]);

  return (
    <section className="rcover" ref={containerRef}>
      <div
        className="rcover__track"
        style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
      >
        {computedSlides.map((s, idx) => {
          if (s.kind === "double") {
            return (
              <div
                key={idx}
                className={`rcover__slide rcover__slide--double$${"{"}{"}"}`}
              >
                {/* Active marker for CSS animations */}
                <div className={idx === activeIndex ? "is-active" : ""} />
                <div className="rcover__top">
                  <Image
                    src={s.topSrc}
                    alt={s.altTop ?? "Top image"}
                    fill
                    priority={priorityTop}
                    className="rcover__topImage"
                    sizes="100vw"
                  />
                </div>
                <div className="rcover__content">
                  <div className="rcover__side rcover__side--left">
                    <Image
                      src={s.leftSrc}
                      alt={s.altLeft ?? "Left image"}
                      fill
                      priority={prioritySides}
                      className="rcover__sideImage"
                      sizes="(max-width: 820px) 100vw, 50vw"
                    />
                  </div>
                  <div className="rcover__side rcover__side--right">
                    <Image
                      src={s.rightSrc}
                      alt={s.altRight ?? "Right image"}
                      fill
                      priority={prioritySides}
                      className="rcover__sideImage"
                      sizes="(max-width: 820px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={idx}
              className={`rcover__slide rcover__slide--content$${"{"}{"}"}`}
            >
              {/* Active marker for CSS animations */}
              <div className={idx === activeIndex ? "is-active" : ""} />
              <div className="rcover__top">
                <Image
                  src={s.topSrc}
                  alt={s.altTop ?? "Top image"}
                  fill
                  priority={priorityTop}
                  className="rcover__topImage"
                  sizes="100vw"
                />
              </div>
              <div className="rcover__content rcover__content--split">
                <div className="rcover__imagePane">
                  <Image
                    src={(s as RcoverContentSlide).imageSrc}
                    alt={s.altImage ?? "Slide image"}
                    fill
                    priority={prioritySides}
                    className="rcover__contentImage"
                    sizes="(max-width: 820px) 100vw, 50vw"
                  />
                </div>
                <div className="rcover__textPane">
                  {s.title && <h2 className="rcover__title">{s.title}</h2>}
                  {s.subtitle && (
                    <h3 className="rcover__subtitle">{s.subtitle}</h3>
                  )}
                  {s.description && (
                    <p className="rcover__description">{s.description}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {computedSlides.length > 1 && (
        <div className="rcover__nav">
          <button
            type="button"
            className="rcover__navBtn"
            aria-label="Previous slide"
            onClick={goPrev}
            disabled={activeIndex === 0}
          >
            ↑
          </button>
          <button
            type="button"
            className="rcover__navBtn"
            aria-label="Next slide"
            onClick={goNext}
            disabled={activeIndex === computedSlides.length - 1}
          >
            ↓
          </button>
        </div>
      )}
    </section>
  );
};

export default Rcover;
