import React from "react";
import Image from "next/image";
import "./Aright.scss";

interface ArightProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Aright: React.FC<ArightProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="aright">
      <div className="aright__container">
        <div className="aright__content">
          <div className="aright__image">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="aright__img"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
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
