"use client";

import Image from "next/image";
import "./Doublerm.scss";

interface DoublermProps {
  leftSrc: string;
  rightSrc: string;
  leftAlt?: string;
  rightAlt?: string;
  leftLabel?: string;
  rightLabel?: string;
}

const Doublerm: React.FC<DoublermProps> = ({
  leftSrc,
  rightSrc,
  leftAlt = "",
  rightAlt = "",
  leftLabel,
  rightLabel,
}) => {
  const scrollToSelector = (selector: string) => {
    try {
      const el = document.querySelector(selector);
      if (el) {
        (el as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } catch {}
  };

  const handleLeftClick = () => {
    // Left image -> go to last section (richvid)
    scrollToSelector("section.richvid");
  };

  const handleRightClick = () => {
    // Right image -> go to next section (richtxt)
    scrollToSelector("section.richtxt");
  };

  const onKeyActivate = (
    e: React.KeyboardEvent<HTMLDivElement>,
    side: "left" | "right"
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (side === "left") handleLeftClick();
      else handleRightClick();
    }
  };
  return (
    <section className="doublerm">
      <div className="doublerm-inner">
        <div
          className="doublerm-panel doublerm-left"
          role="button"
          tabIndex={0}
          aria-label={
            leftLabel ? `Go to video: ${leftLabel}` : "Go to video section"
          }
          onClick={handleLeftClick}
          onKeyDown={(e) => onKeyActivate(e, "left")}
        >
          <Image
            src={leftSrc}
            alt={leftAlt}
            fill
            priority
            className="doublerm-img"
          />
          {leftLabel && (
            <div className={`doublerm-label lleft`}>
              {leftLabel}
            </div>
          )}
        </div>
        <div
          className="doublerm-panel doublerm-right"
          role="button"
          tabIndex={0}
          aria-label={
            rightLabel ? `Go to text: ${rightLabel}` : "Go to text section"
          }
          onClick={handleRightClick}
          onKeyDown={(e) => onKeyActivate(e, "right")}
        >
          <Image
            src={rightSrc}
            alt={rightAlt}
            fill
            priority
            className="doublerm-img"
          />
          {rightLabel && (
            <div className={`doublerm-label lright`}>
              {rightLabel}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Doublerm;
