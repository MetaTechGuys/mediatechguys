"use client";

import Image from "next/image";
import "./Rcover.scss";

type RcoverProps = {
  topSrc: string;
  leftSrc: string;
  rightSrc: string;
  altTop?: string;
  altLeft?: string;
  altRight?: string;
  priorityTop?: boolean;
  prioritySides?: boolean;
};

const Rcover = ({
  topSrc,
  leftSrc,
  rightSrc,
  altTop = "Top image",
  altLeft = "Left image",
  altRight = "Right image",
  priorityTop = false,
  prioritySides = false,
}: RcoverProps) => {
  return (
    <section className="rcover">
      <div className="rcover__top">
        <Image
          src={topSrc}
          alt={altTop}
          fill
          priority={priorityTop}
          className="rcover__topImage"
          sizes="100vw"
        />
      </div>

      <div className="rcover__content">
        <div className="rcover__side rcover__side--left">
          <Image
            src={leftSrc}
            alt={altLeft}
            fill
            priority={prioritySides}
            className="rcover__sideImage"
            sizes="(max-width: 820px) 100vw, 50vw"
          />
        </div>
        <div className="rcover__side rcover__side--right">
          <Image
            src={rightSrc}
            alt={altRight}
            fill
            priority={prioritySides}
            className="rcover__sideImage"
            sizes="(max-width: 820px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Rcover;
