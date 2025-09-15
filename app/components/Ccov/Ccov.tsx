import React from "react";
import Image from "next/image";
import "./Ccov.scss";

interface CcovProps {
  image: string;
  alt?: string;
}

const Ccov: React.FC<CcovProps> = ({ image, alt = "Cover image" }) => {
  return (
    <div className="ccov">
      <Image
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default Ccov;
