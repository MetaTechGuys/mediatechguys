"use client";

import Image from "next/image";
import "./Herocover.scss";

type HerocoverProps = {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  priority?: boolean;
  intrinsicWidth?: number;
  intrinsicHeight?: number;
};

const Herocover = ({
  src,
  alt = "Hero cover",
  title,
  subtitle,
  priority = false,
  intrinsicWidth = 1920,
  intrinsicHeight = 1080,
}: HerocoverProps) => {
  return (
    <section className="herocover">
      <div className="herocover__image">
        <Image
          src={src}
          alt={alt}
          width={intrinsicWidth}
          height={intrinsicHeight}
          sizes="100vw"
          priority={priority}
          style={{ width: "100vw", height: "auto" }}
        />
      </div>
      <div className="herocover__overlay" />
      {(title || subtitle) && (
        <div className="herocover__text">
          {title && <h1 className="herocover__title">{title}</h1>}
          {subtitle && <p className="herocover__subtitle">{subtitle}</p>}
        </div>
      )}
    </section>
  );
};

export default Herocover;
