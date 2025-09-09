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
                      {socials.map((s, i) => (
                        <a
                          key={i}
                          className="contactFull__social"
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {s.label}
                        </a>
                      ))}
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
