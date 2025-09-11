"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "./ContactFull.scss";

type Social = { label: string; href: string };

type ContactFullProps = {
  // left (location)
  title: string;
  subtitle?: string;
  lat: number;
  lon: number;
  label?: string;
  zoom?: number;
  height?: number;
  pinSize?: [number, number];

  // right (contact info)
  infoTitle: string;
  infoSubtitle?: string;
  address?: string;
  telephone?: string;
  email?: string;
  socials?: Social[];
  bgImageSrc: string;
};

const LeafletMap = dynamic(() => import("../Location/LocationLeaflet"), {
  ssr: false,
});

const ContactFull: React.FC<ContactFullProps> = ({
  title,
  subtitle,
  lat,
  lon,
  label,
  zoom = 15,
  height = 480,
  pinSize,
  infoTitle,
  infoSubtitle,
  address,
  telephone,
  email,
  socials,
  bgImageSrc,
}) => {
  const googleUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
  const osmUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`;
  const appleUrl = `https://maps.apple.com/?ll=${lat},${lon}${
    label ? `&q=${encodeURIComponent(label)}` : ""
  }`;

  const getBrandKey = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("instagram")) return "instagram";
    if (l.includes("linkedin")) return "linkedin";
    if (l.includes("twitter")) return "twitter";
    if (l === "x" || l.includes("x (twitter)")) return "x";
    return "generic";
  };

  const BrandIcon: React.FC<{ brand: string }> = ({ brand }) => {
    switch (brand) {
      case "instagram":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"
            />
          </svg>
        );
      case "linkedin":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V23h-4V8zm7 0h3.839v2.042h.054c.534-1.013 1.84-2.082 3.787-2.082 4.05 0 4.8 2.665 4.8 6.131V23h-4v-5.882c0-1.403-.025-3.208-1.956-3.208-1.958 0-2.257 1.53-2.257 3.11V23h-4V8z"
            />
          </svg>
        );
      case "twitter":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.205-4.928 4.928 0 .386.045.762.127 1.124-4.094-.205-7.725-2.165-10.159-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.381 4.6 3.421-1.68 1.318-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.175-.069 2.179 1.398 4.768 2.214 7.548 2.214 9.056 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z"
            />
          </svg>
        );
      case "x":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M18.244 2H21l-6.5 7.43L22 22h-6.828l-4.764-6.149L4.8 22H2l7.02-8.027L2 2h6.914l4.308 5.77L18.244 2zm-2.392 18h1.873L8.27 4H6.31l9.542 16z"
            />
          </svg>
        );
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v5h4v2h-6V7h2z"
            />
          </svg>
        );
    }
  };

  return (
    <section className="contactFull">
      <div className="contactFull__grid">
        {/* Left - Location */}
        <div className="contactFull__left">
          <header className="contactFull__header">
            <h2 className="contactFull__title">{title}</h2>
            {subtitle && <p className="contactFull__subtitle">{subtitle}</p>}
            <div className="contactFull__actions">
              <a
                className="contactFull__btn"
                href={googleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
              <a
                className="contactFull__btn"
                href={osmUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in OpenStreetMap
              </a>
              <a
                className="contactFull__btn"
                href={appleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Apple Maps
              </a>
            </div>
          </header>
          <div className="contactFull__map" style={{ height }}>
            <LeafletMap
              lat={lat}
              lon={lon}
              zoom={zoom}
              label={label}
              pinSize={pinSize}
            />
          </div>
        </div>

        {/* Right - Contact info overlay on bg image */}
        <div className="contactFull__right">
          <div className="contactFull__bg">
            <Image
              src={bgImageSrc}
              alt="Contact background"
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
            />
          </div>
          <div className="contactFull__overlay">
            <div className="contactFull__panel">
              <h3 className="contactFull__infoTitle">{infoTitle}</h3>
              {infoSubtitle && (
                <p className="contactFull__infoSubtitle">{infoSubtitle}</p>
              )}
              <div className="contactFull__list">
                {address && (
                  <div className="contactFull__row">
                    <div className="contactFull__label">Address</div>
                    <div className="contactFull__value">{address}</div>
                  </div>
                )}
                {telephone && (
                  <div className="contactFull__row">
                    <div className="contactFull__label">Telephone</div>
                    <div className="contactFull__value">
                      <a href={`tel:${telephone}`}>{telephone}</a>
                    </div>
                  </div>
                )}
                {email && (
                  <div className="contactFull__row">
                    <div className="contactFull__label">Email</div>
                    <div className="contactFull__value">
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                  </div>
                )}
                {socials && socials.length > 0 && (
                  <div className="contactFull__row">
                    <div className="contactFull__label">Social</div>
                    <div className="contactFull__socials">
                      {socials.map((s, i) => {
                        const brand = getBrandKey(s.label);
                        return (
                          <a
                            key={i}
                            className={`contactFull__social contactFull__social--${brand}`}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                          >
                            <span className="contactFull__socialIcon">
                              <BrandIcon brand={brand} />
                            </span>
                            <span className="contactFull__socialText">
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
        </div>
      </div>
    </section>
  );
};

export default ContactFull;
