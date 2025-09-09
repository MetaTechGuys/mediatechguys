"use client";

import React from "react";
import Image from "next/image";
import "./Contactinfo.scss";

type SocialLink = { label: string; href: string };

type ContactinfoProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  address?: string;
  telephone?: string;
  email?: string;
  socials?: SocialLink[];
};

const Contactinfo: React.FC<ContactinfoProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Contact image",
  address,
  telephone,
  email,
  socials,
}) => {
  const brandKey = (label?: string) =>
    (label || "").toLowerCase().replace(/[^a-z]/g, "");

  const renderIcon = (label?: string) => {
    const key = brandKey(label);
    switch (key) {
      case "instagram":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm6.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"
            />
          </svg>
        );
      case "linkedin":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8.5 8h3.83v2.18h.05c.53-1 1.83-2.18 3.77-2.18 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.75V24h-4z"
            />
          </svg>
        );
      case "x":
      case "twitter":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M18.244 2H21L13.66 10.42 22 22h-6.24l-4.87-6.38L5.2 22H2l7.8-9.07L2 2h6.24l4.52 5.98L18.244 2z"
            />
          </svg>
        );
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M12 2a10 10 0 1 1-9.99 10A10 10 0 0 1 12 2zm0 2a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8z"
            />
          </svg>
        );
    }
  };

  return (
    <section className="contactinfo">
      <div className="contactinfo__container">
        <header className="contactinfo__header">
          <h2 className="contactinfo__title">{title}</h2>
          {subtitle && <p className="contactinfo__subtitle">{subtitle}</p>}
        </header>

        <div className="contactinfo__content">
          <div className="contactinfo__imagePane">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              className="contactinfo__image"
            />
          </div>

          <div className="contactinfo__details">
            {address && (
              <div className="contactinfo__item">
                <div className="contactinfo__itemLabel">Address</div>
                <div className="contactinfo__itemValue">{address}</div>
              </div>
            )}
            {telephone && (
              <div className="contactinfo__item">
                <div className="contactinfo__itemLabel">Telephone</div>
                <div className="contactinfo__itemValue">
                  <a href={`tel:${telephone}`}>{telephone}</a>
                </div>
              </div>
            )}
            {email && (
              <div className="contactinfo__item">
                <div className="contactinfo__itemLabel">Email</div>
                <div className="contactinfo__itemValue">
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
            )}
            {socials && socials.length > 0 && (
              <div className="contactinfo__item">
                <div className="contactinfo__itemLabel">Social</div>
                <div className="contactinfo__socials">
                  {socials.map((s, i) => {
                    const key = brandKey(s.label);
                    return (
                      <a
                        key={i}
                        className={`contactinfo__socialLink contactinfo__socialLink--${key}`}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                      >
                        <span className="contactinfo__socialIcon">
                          {renderIcon(s.label)}
                        </span>
                        <span className="contactinfo__socialText">
                          {s.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactinfo;
