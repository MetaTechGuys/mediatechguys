"use client";

import ContactFull from "../components/ContactFull/ContactFull";
import Cform from "../components/Cform/Cform";

export default function ContactPage() {
  return (
    <div>
      <ContactFull
        title="Location"
        subtitle="Iran, Tehran, Gheytarieh St., Nami St."
        lat={35.796682025179076}
        lon={51.4478988343275}
        label="MediaTechGuys HQ"
        zoom={18}
        height={480}
        pinSize={[20, 20]}
        infoTitle="Get in Touch"
        infoSubtitle="We'd love to hear from you. Reach us via any channel."
        address="Iran, Tehran, Gheytarieh St., Nami St."
        telephone="+98 21 1234 5678"
        email="hello@mediatechguys.com"
        socials={[
          { label: "Instagram", href: "https://instagram.com/mediatechguys" },
          {
            label: "LinkedIn",
            href: "https://linkedin.com/company/mediatechguys",
          },
          { label: "X (Twitter)", href: "https://twitter.com/mediatechguys" },
        ]}
        bgImageSrc="/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-32.webp"
      />
      <div style={{ padding: "2rem 1rem" }}>
        <Cform title="Contact Us" actionUrl="/api/contact" />
      </div>
    </div>
  );
}
