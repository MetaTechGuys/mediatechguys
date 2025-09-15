import React from "react";
import Image from "next/image";
import "./Aleft.scss";

interface AleftProps {
  title: string;
  description: string;
  mediaSrc: string;
  mediaAlt: string;
  mediaType?: "image" | "video";
}

const Aleft: React.FC<AleftProps> = ({
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
          className="aleft__video"
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
        className="aleft__img"
        width={800}
        height={600}
        sizes="(max-width: 768px) 100vw, 600px"
      />
    );
  };

  return (
    <div className="aleft">
      <div className="aleft__container">
        <div className="aleft__content">
          <div className="aleft__text">
            <h2 className="aleft__title">{title}</h2>
            <p className="aleft__description">{description}</p>
          </div>
          <div className="aleft__media">{renderMedia()}</div>
        </div>
      </div>
    </div>
  );
};

export default Aleft;
