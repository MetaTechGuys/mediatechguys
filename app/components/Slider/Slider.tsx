"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./Slider.scss";

interface SliderImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  opacity?: number;
  blendMode?:
    | "multiply"
    | "overlay"
    | "soft-light"
    | "hard-light"
    | "color-burn"
    | "screen"
    | "normal";
}

interface SliderSlide {
  id: number;
  images: SliderImage[];
  title?: string;
  description?: string;
}

interface SliderProps {
  slides: SliderSlide[];
  backgroundImage: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  slides,
  backgroundImage,
  autoPlay = true,
  autoPlayInterval = 8800,
  showDots = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || slides.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length, isPaused]);

  const pauseAutoplay = () => {
    setIsPaused(true);
    // Resume autoplay after 2 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;

    pauseAutoplay(); // Pause autoplay when user navigates
    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  const goToPrevious = () => {
    pauseAutoplay(); // Pause autoplay when user navigates
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    pauseAutoplay(); // Pause autoplay when user navigates
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  if (!slides || slides.length === 0) {
    return <div className="slider-error">No slides provided</div>;
  }

  return (
    <div className="slider">
      {/* Fixed Background Image */}
      <div className="slider-background">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="slider-bg-image"
          priority
        />
      </div>

      {/* Slider Container */}
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-slide ${index === currentIndex ? "active" : ""}`}
          >
            {/* Three stacked images */}
            <div
              className="slider-images-stack"
              key={`${slide.id}-${currentIndex}`}
            >
              {slide.images.slice(0, 3).map((image, imgIndex) => (
                <div
                  key={`${slide.id}-${image.id}-${currentIndex}`}
                  className="slider-image-layer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="slider-overlay-image"
                    style={{
                      opacity: image.opacity || 0.7,
                      mixBlendMode: image.blendMode || "multiply",
                      zIndex: imgIndex + 1,
                    }}
                    priority={index === 0 && imgIndex === 0}
                  />
                </div>
              ))}
            </div>
            <div className="slider-content">
              {slide.title && <h2 className="slider-title">{slide.title}</h2>}
              {slide.description && (
                <p className="slider-description">{slide.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            type="button"
            className="slider-arrow slider-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="slider-arrow slider-arrow-right"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && slides.length > 1 && (
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`slider-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
