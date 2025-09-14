"use client";

import { useEffect, useRef, useState } from "react";
import "./Vidrva.scss";

export interface VidrvaVideo {
  id: number;
  src: string;
  poster?: string;
  title?: string;
}

interface VidrvaProps {
  videos: VidrvaVideo[];
  activeIndex: number;
  sectionId?: string;
  onVideoChange?: (index: number) => void;
}

const Vidrva: React.FC<VidrvaProps> = ({
  videos,
  activeIndex,
  sectionId = "vidrva-section",
  onVideoChange,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(() =>
    Array(videos.length).fill(false)
  );
  const [customCursor, setCustomCursor] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Pause all other videos when activeIndex changes
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      try {
        if (idx !== activeIndex) {
          v.pause();
          v.currentTime = 0;
        }
      } catch {}
    });
  }, [activeIndex]);

  // Listen for slide clicks from Rvavid
  useEffect(() => {
    const handleSlideClick = (event: CustomEvent) => {
      const { index } = event.detail;
      if (
        onVideoChange &&
        typeof index === "number" &&
        index >= 0 &&
        index < videos.length
      ) {
        onVideoChange(index);
      }
    };

    window.addEventListener(
      "rvavid:slideClick",
      handleSlideClick as EventListener
    );
    return () => {
      window.removeEventListener(
        "rvavid:slideClick",
        handleSlideClick as EventListener
      );
    };
  }, [onVideoChange, videos.length]);

  // Mouse tracking for custom cursor
  useEffect(() => {
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
  }, [customCursor.visible]);

  // Hide cursor when mouse leaves window
  useEffect(() => {
    const handleMouseLeave = () => {
      setCustomCursor((prev) => ({ ...prev, visible: false }));
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handlePlay = (idx: number) => {
    if (!isLoaded[idx]) {
      setIsLoaded((prev) => {
        const next = [...prev];
        next[idx] = true;
        return next;
      });
      // Wait for src to be applied, then play
      requestAnimationFrame(() => {
        const el = videoRefs.current[idx];
        try {
          el?.load();
          el?.play();
        } catch {}
      });
    } else {
      try {
        videoRefs.current[idx]?.play();
      } catch {}
    }
  };

  return (
    <section id={sectionId} ref={sectionRef} className="vidrva">
      {/* Custom Cursor */}
      {customCursor.visible && (
        <div
          className="vidrva-custom-cursor"
          style={{
            left: customCursor.x,
            top: customCursor.y,
          }}
        />
      )}
      <div className="vidrva-container">
        {videos.map((v, idx) => (
          <div
            key={v.id}
            className={`vidrva-item ${
              idx === activeIndex ? "active" : "hidden"
            }`}
          >
            <div className="vidrva-aspect">
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                className="vidrva-video"
                controls={isLoaded[idx]}
                playsInline
                preload="none"
                poster={v.poster}
                src={isLoaded[idx] ? v.src : undefined}
                onMouseEnter={() =>
                  setCustomCursor((prev) => ({ ...prev, visible: true }))
                }
                onMouseLeave={() =>
                  setCustomCursor((prev) => ({ ...prev, visible: false }))
                }
                onPlay={() => {
                  // If user presses the native play button before we set src
                  if (!isLoaded[idx]) {
                    handlePlay(idx);
                  }
                }}
              >
                Your browser does not support the video tag.
              </video>
              {!isLoaded[idx] && (
                <button
                  type="button"
                  className="vidrva-playButton"
                  aria-label={`Play ${v.title ?? "video"}`}
                  onClick={() => handlePlay(idx)}
                  onMouseEnter={() =>
                    setCustomCursor((prev) => ({ ...prev, visible: true }))
                  }
                  onMouseLeave={() =>
                    setCustomCursor((prev) => ({ ...prev, visible: false }))
                  }
                >
                  ▶
                </button>
              )}
            </div>
            {v.title && <h3 className="vidrva-title">{v.title}</h3>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vidrva;
