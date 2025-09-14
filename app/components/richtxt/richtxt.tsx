"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./richtxt.scss";

interface ColumnItem {
  subtitle: string;
  text: string;
}

interface RichtxtProps {
  title: string;
  description?: string;
  leftColumn: ColumnItem[];
  rightColumn: ColumnItem[];
  images?: string[];
  layout?: "default" | "four-row";
}

const Richtxt: React.FC<RichtxtProps> = ({
  title,
  leftColumn,
  rightColumn,
  images = [],
  layout = "default",
}) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (layout !== "four-row" || images.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: "0px 0px -10% 0px", // Start animation slightly before fully in view
      }
    );

    const currentRefs = imageRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [layout, images.length]);

  if (layout === "four-row") {
    return (
      <section className="richtxt richtxt-four-row">
        <div className="richtxt-container">
          {/* Row 1: Title */}
          <div className="richtxt-row richtxt-title-row">
            <h2 className="richtxt-title">{title}</h2>
          </div>

          {/* Row 2: First set of 2 columns */}
          <div className="richtxt-row richtxt-content-row">
            <div className="richtxt-column richtxt-left">
              {leftColumn
                .slice(0, Math.ceil(leftColumn.length / 2))
                .map((item, index) => (
                  <div key={index} className="richtxt-item">
                    <h3 className="richtxt-subtitle">{item.subtitle}</h3>
                    <p className="richtxt-text">{item.text}</p>
                  </div>
                ))}
            </div>
            <div className="richtxt-column richtxt-right">
              {rightColumn
                .slice(0, Math.ceil(rightColumn.length / 2))
                .map((item, index) => (
                  <div key={index} className="richtxt-item">
                    <h3 className="richtxt-subtitle">{item.subtitle}</h3>
                    <p className="richtxt-text">{item.text}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Row 3: 3 Images */}
          {images.length > 0 && (
            <div className="richtxt-row richtxt-images-row">
              <div className="richtxt-images">
                {images.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    className="richtxt-image"
                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}
                  >
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      width={400}
                      height={300}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Row 4: Second set of 2 columns */}
          <div className="richtxt-row richtxt-content-row">
            <div className="richtxt-column richtxt-left">
              {leftColumn
                .slice(Math.ceil(leftColumn.length / 2))
                .map((item, index) => (
                  <div key={index} className="richtxt-item">
                    <h3 className="richtxt-subtitle">{item.subtitle}</h3>
                    <p className="richtxt-text">{item.text}</p>
                  </div>
                ))}
            </div>
            <div className="richtxt-column richtxt-right">
              {rightColumn
                .slice(Math.ceil(rightColumn.length / 2))
                .map((item, index) => (
                  <div key={index} className="richtxt-item">
                    <h3 className="richtxt-subtitle">{item.subtitle}</h3>
                    <p className="richtxt-text">{item.text}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Richtxt;
