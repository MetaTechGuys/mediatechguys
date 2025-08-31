"use client";

import Image from "next/image";
import "./Procover.scss";

type ProcoverProps = {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  button?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  priority?: boolean;
  intrinsicWidth?: number;
  intrinsicHeight?: number;
};

const Procover = ({
  src,
  alt = "Pro cover",
  title,
  subtitle,
  button,
  priority = false,
  intrinsicWidth = 1920,
  intrinsicHeight = 1080,
}: ProcoverProps) => {
  const renderButton = () => {
    if (!button) return null;

    if (button.href) {
      return (
        <a href={button.href} className="procover__button">
          {button.text}
        </a>
      );
    }

    return (
      <button onClick={button.onClick} className="procover__button">
        {button.text}
      </button>
    );
  };

  return (
    <section className="procover">
      <div className="procover__image">
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
      <div className="procover__overlay" />
      {(title || subtitle || button) && (
        <div className="procover__text">
          {title && <h1 className="procover__title">{title}</h1>}
          {subtitle && <p className="procover__subtitle">{subtitle}</p>}
          {renderButton()}
        </div>
      )}
    </section>
  );
};

export default Procover;
