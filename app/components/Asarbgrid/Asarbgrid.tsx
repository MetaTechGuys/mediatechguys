import React from "react";
import Image from "next/image";
import "./Asarbgrid.scss";

interface TextItem {
  title: string;
  description: string;
}

interface AsarbgridProps {
  image: string;
  texts: TextItem[];
}

const Asarbgrid: React.FC<AsarbgridProps> = ({ image, texts }) => {
  return (
    <div className="asarbgrid">
      <div className="asarbgrid__grid">
        {/* Image spanning 2 columns */}
        <div className="asarbgrid__image">
          <Image
            src={image}
            alt="Main image"
            width={800}
            height={400}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* First text */}
        <div className="asarbgrid__text asarbgrid__text--first">
          <h3>{texts[0].title}</h3>
          <p>{texts[0].description}</p>
        </div>

        {/* Second text */}
        <div className="asarbgrid__text asarbgrid__text--second">
          <h3>{texts[1].title}</h3>
          <p>{texts[1].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Asarbgrid;
