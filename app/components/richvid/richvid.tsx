"use client";

import { useState, useEffect } from "react";
import "./richvid.scss";

interface RichvidProps {
  videoSrc: string;
  title?: string;
  description?: string;
  poster?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  titleColor?: string;
  disableCustomCursor?: boolean;
}

const Richvid: React.FC<RichvidProps> = ({
  videoSrc,
  title,
  description,
  poster,
  autoplay = false,
  muted = true,
  loop = false,
  controls = true,
  titleColor,
  disableCustomCursor = false,
}) => {
  const [customCursor, setCustomCursor] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  // Mouse tracking for custom cursor (only if not disabled)
  useEffect(() => {
    if (disableCustomCursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (customCursor.visible) {
        setCustomCursor((prev) => ({
          ...prev,
          x: e.clientX,
          y: e.clientY,
        }));
      }
    };

    if (customCursor.visible) {
      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
    }
  }, [customCursor.visible, disableCustomCursor]);

  // Hide cursor when mouse leaves window (only if not disabled)
  useEffect(() => {
    if (disableCustomCursor) return;

    const handleMouseLeave = () => {
      setCustomCursor((prev) => ({ ...prev, visible: false }));
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [disableCustomCursor]);
  return (
    <section className="richvid">
      {/* Custom Cursor */}
      {!disableCustomCursor && customCursor.visible && (
        <div
          className="richvid-custom-cursor"
          style={{
            left: customCursor.x,
            top: customCursor.y,
          }}
        />
      )}
      <div className="richvid-container">
        {(title || description) && (
          <div className="richvid-header">
            {title && (
              <h2
                className="richvid-title"
                style={titleColor ? { color: titleColor } : undefined}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="richvid-description">{description}</p>
            )}
          </div>
        )}

        <div className="richvid-video-wrapper">
          <video
            className={`richvid-video ${
              disableCustomCursor ? "richvid-video--default-cursor" : ""
            }`}
            src={videoSrc}
            poster={poster}
            autoPlay={autoplay}
            muted={muted}
            loop={loop}
            controls={controls}
            playsInline
            preload="metadata"
            onMouseEnter={() =>
              !disableCustomCursor &&
              setCustomCursor((prev) => ({ ...prev, visible: true }))
            }
            onMouseLeave={() =>
              !disableCustomCursor &&
              setCustomCursor((prev) => ({ ...prev, visible: false }))
            }
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Richvid;
