"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import "./Capcover.scss";

type OverlayImage = {
  src: string;
  alt?: string;
  className?: string;
};

export type CapSlide = {
  id: string | number;
  background: string;
  overlays: OverlayImage[]; // supports 4 or more overlays
};

interface CapcoverProps {
  slides: CapSlide[];
  autoPlayMs?: number;
  animationStaggerMs?: number;
  resumeAfterMs?: number;
}

export default function Capcover({
  slides,
  autoPlayMs = 200,
  animationStaggerMs = 80,
  resumeAfterMs = 800,
}: CapcoverProps) {
  const [index, setIndex] = useState(0);
  const [animStep, setAnimStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animTimers = useRef<number[]>([]);
  const autoTimer = useRef<number | null>(null);
  const resumeTimer = useRef<number | null>(null);

  const total = slides.length;
  const current = useMemo(() => slides[index % total], [slides, index, total]);

  const clearAnimTimers = () => {
    animTimers.current.forEach((t) => window.clearTimeout(t));
    animTimers.current = [];
  };

  const scheduleOverlayAnimation = () => {
    setAnimStep(0);
    clearAnimTimers();
    const overlayCount = Math.min(6, slides[index]?.overlays?.length || 0);
    for (let i = 1; i <= overlayCount; i += 1) {
      const t = window.setTimeout(() => setAnimStep(i), i * animationStaggerMs);
      animTimers.current.push(t);
    }
  };

  useEffect(() => {
    scheduleOverlayAnimation();
    return () => clearAnimTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const go = (dir: 1 | -1) => {
    // When user navigates manually, pause autoplay to prevent conflicts
    if (autoTimer.current) {
      window.clearInterval(autoTimer.current);
      autoTimer.current = null;
    }
    setIsPaused(true);
    if (resumeTimer.current) {
      window.clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
    if (resumeAfterMs && autoPlayMs) {
      resumeTimer.current = window.setTimeout(() => {
        setIsPaused(false);
      }, resumeAfterMs) as unknown as number;
    }
    setIndex((prev) => (prev + dir + total) % total);
  };

  useEffect(() => {
    if (!autoPlayMs) return;
    if (isPaused) {
      // keep autoplay stopped after user interaction
      if (autoTimer.current) {
        window.clearInterval(autoTimer.current);
        autoTimer.current = null;
      }
      return;
    }
    if (autoTimer.current) window.clearInterval(autoTimer.current);
    autoTimer.current = window.setInterval(() => {
      go(1);
    }, autoPlayMs) as unknown as number;
    return () => {
      if (autoTimer.current) window.clearInterval(autoTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlayMs, total, isPaused]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) {
        window.clearTimeout(resumeTimer.current);
        resumeTimer.current = null;
      }
    };
  }, []);

  return (
    <section className="capcover" aria-roledescription="carousel">
      <div className="capcover-viewport">
        {slides.map((slide, i) => {
          const isActive = i === index;
          return (
            <div
              key={slide.id}
              className={`capcover-slide${isActive ? " active" : ""}`}
              style={{ backgroundImage: `url(${slide.background})` }}
              aria-hidden={!isActive}
            >
              {slide.overlays.map((ov, idx) => {
                if (!ov?.src) return null;
                const step = idx + 1;
                return (
                  <div
                    key={idx}
                    className={`overlay overlay-${step}${
                      animStep >= step ? " in" : ""
                    }`}
                  >
                    <img
                      src={ov.src}
                      alt={ov.alt || `overlay ${step}`}
                      className={`overlay-img ${ov.className || ""}`}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="capcover-nav" aria-label="Slide navigation">
        <button
          className="nav-btn prev"
          onClick={() => go(-1)}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className="nav-btn next"
          onClick={() => go(1)}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
