import React from "react";
import Image from "next/image";
import "./Captxt.scss";

interface SectionItem {
  image: string;
  title: string;
  description: string;
}

interface CaptxtProps {
  title: string;
  sections: SectionItem[];
}

const Captxt: React.FC<CaptxtProps> = ({ title, sections }) => {
  return (
    <div className="captxt">
      <div className="captxt__title">
        <h2>{title}</h2>
      </div>

      <div className="captxt__grid">
        {/* First image spanning 2 rows */}
        <div className="captxt__image captxt__image--first">
          <Image
            src={sections[0].image}
            alt={sections[0].title}
            width={400}
            height={600}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* First two text sections */}
        <div className="captxt__text captxt__text--first">
          <h3>{sections[0].title}</h3>
          <p>{sections[0].description}</p>
        </div>

        <div className="captxt__text captxt__text--second">
          <h3>{sections[1].title}</h3>
          <p>{sections[1].description}</p>
        </div>

        {/* Second image spanning 2 rows */}
        <div className="captxt__image captxt__image--second">
          <Image
            src={sections[1].image}
            alt={sections[1].title}
            width={400}
            height={600}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Third and fourth text sections */}
        <div className="captxt__text captxt__text--third">
          <h3>{sections[2].title}</h3>
          <p>{sections[2].description}</p>
        </div>

        <div className="captxt__text captxt__text--fourth">
          <h3>{sections[3].title}</h3>
          <p>{sections[3].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Captxt;
