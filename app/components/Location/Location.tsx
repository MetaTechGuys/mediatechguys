"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import "./Location.scss";

type LocationProps = {
  lat: number;
  lon: number;
  label?: string;
  title?: string;
  subtitle?: string;
  zoom?: number; // 1-19
  height?: number; // px height of the map
  className?: string;
  pinUrl?: string;
  pinSize?: [number, number];
};

const clampZoom = (z: number | undefined): number => {
  const v = typeof z === "number" ? z : 15;
  return Math.max(1, Math.min(19, Math.floor(v)));
};

const toFixed6 = (v: number) => Number(v.toFixed(6));

const LeafletMap = dynamic(() => import("./LocationLeaflet"), { ssr: false });

const Location: React.FC<LocationProps> = ({
  lat,
  lon,
  label,
  title,
  subtitle,
  zoom,
  height = 360,
  className,
  pinUrl,
  pinSize,
}) => {
  const z = clampZoom(zoom);

  const coords = useMemo(
    () => ({ lat: toFixed6(lat), lon: toFixed6(lon) }),
    [lat, lon]
  );

  // Leaflet map rendered client-side

  // External map links
  const googleUrl = `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lon}`;
  const osmUrl = `https://www.openstreetmap.org/?mlat=${coords.lat}&mlon=${coords.lon}#map=${z}/${coords.lat}/${coords.lon}`;
  const appleUrl = `https://maps.apple.com/?ll=${coords.lat},${coords.lon}${
    label ? `&q=${encodeURIComponent(label)}` : ""
  }`;

  return (
    <section className={`location ${className ?? ""}`.trim()}>
      {(title || subtitle) && (
        <div className="location__heading">
          {title && <h2 className="location__title">{title}</h2>}
          {subtitle && <p className="location__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="location__map" style={{ height }}>
        <div className="location__leaflet" style={{ height: "100%" }}>
          <LeafletMap
            lat={coords.lat}
            lon={coords.lon}
            label={label}
            zoom={z}
            pinUrl={pinUrl}
            pinSize={pinSize}
          />
        </div>
      </div>

      <div className="location__info">
        {label && <h3 className="location__label">{label}</h3>}
        <div className="location__coords">
          <span className="location__coord">
            <strong>Lat:</strong> {coords.lat}
          </span>
          <span className="location__sep">·</span>
          <span className="location__coord">
            <strong>Lon:</strong> {coords.lon}
          </span>
          <span className="location__sep">·</span>
          <span className="location__coord">
            <strong>Zoom:</strong> {z}
          </span>
        </div>

        <div className="location__actions">
          <a
            className="location__btn"
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
          <a
            className="location__btn"
            href={osmUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in OpenStreetMap
          </a>
          <a
            className="location__btn"
            href={appleUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Apple Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
