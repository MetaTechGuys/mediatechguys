import React from "react";
import Image from "next/image";
import "./Aright.scss";

interface ArightProps {
  title: string;
  description: string;
  mediaSrc: string;
  mediaAlt: string;
  mediaType?: "image" | "video";
}

const Aright: React.FC<ArightProps> = ({
  title,
  description,
  mediaSrc,
  mediaAlt,
  mediaType = "image",
}) => {
  const renderMedia = () => {
    if (mediaType === "video") {
      return (
        <video
          src={mediaSrc}
          className="aright__video"
          muted
          loop
          playsInline
          autoPlay
          aria-label={mediaAlt}
        />
      );
    }

    return (
      <Image
        src={mediaSrc}
        alt={mediaAlt}
        className="aright__img"
        width={800}
        height={600}
        sizes="(max-width: 768px) 100vw, 600px"
      />
    );
  };

  return (
    <div className="aright">
      <div className="aright__container">
        <div className="aright__content">
          <div className="aright__media">{renderMedia()}</div>
          <div className="aright__text">
            <h2 className="aright__title">{title}</h2>
            <p className="aright__description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aright;
