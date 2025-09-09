"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./Rvavid.scss";

interface RvavidSlide {
  id: number;
  src: string;
  alt: string;
  title: string;
  description?: string;
  secondarySrc?: string;
}

interface RvavidProps {
  title: string;
  subtitle?: string;
  description: string;
  slides: RvavidSlide[];
  button?: {
    text: string;
    href: string;
  };
}

const Rvavid: React.FC<RvavidProps> = ({
  title,
  subtitle,
  description,
  slides,
  button,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToVidrva = () => {
    try {
      const el = document.querySelector("section.vidrva");
      if (el) {
        (el as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } catch {}
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const slideEls = Array.from(
      section.querySelectorAll<HTMLDivElement>(".rvavid-slide")
    );
    if (slideEls.length === 0) return;

    // Use an observer with a centered band so when a slide crosses the middle it becomes active
    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the entry that is intersecting (center band) and has highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
          );
        if (visible.length > 0) {
          const el = visible[0].target as HTMLDivElement;
          const idxAttr = el.getAttribute("data-index");
          const idx = idxAttr ? parseInt(idxAttr, 10) : 0;
          if (!Number.isNaN(idx)) setActiveSlide(idx);
        }
      },
      {
        root: null,
        // Center band: element intersects when its center area reaches viewport middle
        rootMargin: "-50% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    slideEls.forEach((el) => observer.observe(el));

    // Ensure an initial evaluation
    setTimeout(() => {
      slideEls.forEach((el) => observer.observe(el));
    }, 0);

    return () => {
      slideEls.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [slides.length]);

  return (
    <section ref={sectionRef} className="rvavid">
      <div className="rvavid-container">
        {/* Left Side - Text Content */}
        <div className="rvavid-text">
          <div className="rvavid-content">
            <h1 className="rvavid-title">
              {slides[activeSlide]?.title || title}
            </h1>
            {subtitle && <h2 className="rvavid-subtitle">{subtitle}</h2>}
            <p className="rvavid-description">
              {slides[activeSlide]?.description || description}
            </p>
            {button && (
              <a href={button.href} className="rvavid-button">
                {button.text}
              </a>
            )}
          </div>
        </div>

        {/* Right Side - Vertical Slider */}
        <div className="rvavid-slider">
          <div className="rvavid-slides-container">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                data-index={index}
                className={`rvavid-slide ${
                  index === activeSlide ? "active" : ""
                }`}
                onClick={() => {
                  // Dispatch event with slide index for Vidrva
                  const event = new CustomEvent("rvavid:slideClick", {
                    detail: { index },
                  });
                  window.dispatchEvent(event);
                  scrollToVidrva();
                }}
                role="button"
                tabIndex={0}
                aria-label={`View video for ${slide.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    const event = new CustomEvent("rvavid:slideClick", {
                      detail: { index },
                    });
                    window.dispatchEvent(event);
                    scrollToVidrva();
                  }
                }}
              >
                <div className="rvavid-layers">
                  <div className="rvavid-layer rvavid-layer-bottom">
                    <Image
                      src="/images/takt-studios-brandeed-content-agency-services-768x768.webp"
                      alt={slide.alt}
                      width={320}
                      height={320}
                      className="rvavid-image"
                      priority={index === 0}
                    />
                  </div>
                  <div className="rvavid-layer rvavid-layer-top">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="rvavid-image"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rvavid;
