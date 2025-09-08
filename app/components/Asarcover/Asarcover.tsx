"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import "./Asarcover.scss";

interface AsarcoverProps {
  leftSrc: string;
  rightSrc: string;
  leftAlt?: string;
  rightAlt?: string;
  leftText: string;
}

export default function Asarcover({
  leftSrc,
  rightSrc,
  leftAlt = "",
  rightAlt = "",
  leftText,
}: AsarcoverProps) {
  const labelRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const element = labelRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    const rotateMax = 8; // degrees
    const rotateY = Math.max(Math.min((deltaX / (rect.width / 2)) * rotateMax, rotateMax), -rotateMax);
    const rotateX = Math.max(Math.min((-deltaY / (rect.height / 2)) * rotateMax, rotateMax), -rotateMax);

    element.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    const element = labelRef.current;
    if (element) {
      element.style.transform = "translate(-50%, -50%) rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  return (
    <section className="asarcover">
      <div className="asarcover-inner">
        <div
          className={`asarcover-panel asarcover-left${isHovering ? " hovering" : ""}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={leftSrc} alt={leftAlt} fill priority className="asarcover-img" />
          <div ref={labelRef} className="asarcover-label">
            {leftText}
          </div>
        </div>
        <div className="asarcover-panel asarcover-right">
          <Image src={rightSrc} alt={rightAlt} fill priority className="asarcover-img" />
        </div>
      </div>
    </section>
  );
}


