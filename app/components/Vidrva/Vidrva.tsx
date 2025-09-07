"use client";

import { useEffect, useRef } from "react";
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
}

const Vidrva: React.FC<VidrvaProps> = ({
  videos,
  activeIndex,
  sectionId = "vidrva-section",
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  return (
    <section id={sectionId} ref={sectionRef} className="vidrva">
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
                controls
                playsInline
                poster={v.poster}
              >
                <source src={v.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {v.title && <h3 className="vidrva-title">{v.title}</h3>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vidrva;
