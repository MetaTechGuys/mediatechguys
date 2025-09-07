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

interface SliderProps {
  images: SliderImage[];
  backgroundImage: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  images,
  backgroundImage,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  if (!images || images.length === 0) {
    return <div className="slider-error">No images provided</div>;
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
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`slider-slide ${index === currentIndex ? "active" : ""}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="slider-overlay-image"
              style={{
                opacity: image.opacity || 0.7,
                mixBlendMode: image.blendMode || "multiply",
              }}
              priority={index === 0}
            />
            <div className="slider-content">
              {image.title && <h2 className="slider-title">{image.title}</h2>}
              {image.description && (
                <p className="slider-description">{image.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <button
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
      {showDots && images.length > 1 && (
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
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
