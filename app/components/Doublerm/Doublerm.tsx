"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import "./Doublerm.scss";

interface DoublermProps {
  leftSrc: string;
  rightSrc: string;
  leftAlt?: string;
  rightAlt?: string;
  leftLabel?: string;
  rightLabel?: string;
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const Doublerm: React.FC<DoublermProps> = ({
  leftSrc,
  rightSrc,
  leftAlt = "",
  rightAlt = "",
  leftLabel,
  rightLabel,
}) => {
  return (
    <section className="doublerm">
      <div className="doublerm-inner">
        <div className="doublerm-panel doublerm-left">
          <Image
            src={leftSrc}
            alt={leftAlt}
            fill
            priority
            className="doublerm-img"
          />
          {leftLabel && (
            <div className={`doublerm-label lleft ${playfair.className}`}>
              {leftLabel}
            </div>
          )}
        </div>
        <div className="doublerm-panel doublerm-right">
          <Image
            src={rightSrc}
            alt={rightAlt}
            fill
            priority
            className="doublerm-img"
          />
          {rightLabel && (
            <div className={`doublerm-label lright ${playfair.className}`}>
              {rightLabel}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Doublerm;
