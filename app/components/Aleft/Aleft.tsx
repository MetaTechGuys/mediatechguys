import React from "react";
import Image from "next/image";
import "./Aleft.scss";

interface AleftProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Aleft: React.FC<AleftProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="aleft">
      <div className="aleft__container">
        <div className="aleft__content">
          <div className="aleft__text">
            <h2 className="aleft__title">{title}</h2>
            <p className="aleft__description">{description}</p>
          </div>
          <div className="aleft__image">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="aleft__img"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aleft;
