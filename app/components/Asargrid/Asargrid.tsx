import React from "react";
import Image from "next/image";
import "./Asargrid.scss";

interface AsargridProps {
  title: string;
  mainText: {
    title: string;
    description: string;
  };
  topImage: string;
  bottomText: {
    title: string;
    description: string;
  };
  bottomImage: string;
}

const Asargrid: React.FC<AsargridProps> = ({
  title,
  mainText,
  topImage,
  bottomText,
  bottomImage,
}) => {
  return (
    <div className="asargrid">
      <div className="asargrid__title">
        <h2>{title}</h2>
      </div>
      <div className="asargrid__grid">
        {/* Main text spanning 2 columns and 2 rows */}
        <div className="asargrid__main-text">
          <h2>{mainText.title}</h2>
          <p>{mainText.description}</p>
        </div>

        {/* Top image spanning 2 rows */}
        <div className="asargrid__top-image">
          <Image
            src={topImage}
            alt={mainText.title}
            width={400}
            height={600}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>

        {/* Bottom text spanning 2 columns */}
        <div className="asargrid__bottom-text">
          <h3>{bottomText.title}</h3>
          <p>{bottomText.description}</p>
        </div>

        {/* Bottom image */}
        <div className="asargrid__bottom-image">
          <Image
            src={bottomImage}
            alt={bottomText.title}
            width={400}
            height={300}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Asargrid;
