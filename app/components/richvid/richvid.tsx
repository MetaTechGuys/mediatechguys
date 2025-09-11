"use client";

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
}) => {
  return (
    <section className="richvid">
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
            className="richvid-video"
            src={videoSrc}
            poster={poster}
            autoPlay={autoplay}
            muted={muted}
            loop={loop}
            controls={controls}
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Richvid;
