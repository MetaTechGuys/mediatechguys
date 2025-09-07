"use client";
import Rvavid from "../components/Rvavid/Rvavid";
import Vidrva, { VidrvaVideo } from "../components/Vidrva/Vidrva";
import { useEffect, useState } from "react";

export default function RvaPage() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoSectionId = "vidrva-section";

  const slides = [
    {
      id: 1,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-01.webp",
      alt: "Royal Virtual Assets",
      title: "Royal Virtual Assets",
      description: "Future of Digital Assets",
    },
    {
      id: 2,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-02.webp",
      alt: "Digital Marketing",
      title: "Digital Marketing Excellence",
      description: "Start your Digital Marketing journey with us!",
    },
    {
      id: 3,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-03.webp",
      alt: "Capital Address Group",
      title: "Capital Address Group",
      description: "Future of Economy",
    },
    {
      id: 4,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-04.webp",
      alt: "Asar Sazan Properties",
      title: "Asar Sazan Properties",
      description: "Future of Architecture",
    },
    {
      id: 5,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-06.webp",
      alt: "RichMind Holding",
      title: "RichMind Holding",
      description: "Future of Business",
    },
    {
      id: 6,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-08.webp",
      alt: "HighEnd Restaurant",
      title: "HighEnd Restaurant",
      description: "A Delicious Memory",
    },
  ];

  const videos: VidrvaVideo[] = [
    {
      id: 1,
      src: "/videos/rva-intro.mp4",
      poster: slides[0].src,
      title: slides[0].title,
    },
    {
      id: 2,
      src: "/videos/marketing-showcase.mp4",
      poster: slides[1].src,
      title: slides[1].title,
    },
    {
      id: 3,
      src: "/videos/capital-address.mp4",
      poster: slides[2].src,
      title: slides[2].title,
    },
    {
      id: 4,
      src: "/videos/architecture-demo.mp4",
      poster: slides[3].src,
      title: slides[3].title,
    },
    {
      id: 5,
      src: "/videos/business-overview.mp4",
      poster: slides[4].src,
      title: slides[4].title,
    },
    {
      id: 6,
      src: "/videos/highend.mp4",
      poster: slides[5].src,
      title: slides[5].title,
    },
  ];

  const handleSlideClick = (index: number) => {
    setActiveVideo(index);
    const el = document.getElementById(videoSectionId);
    if (el) {
      const rect = el.getBoundingClientRect();
      const offset = 0; // rely on CSS scroll-margin-top for header spacing
      const targetY = window.scrollY + rect.top - offset;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
  };

  // Listen to slide clicks from Rvavid and map to video selection
  useEffect(() => {
    const listener = (e: any) => {
      const idx = e?.detail?.index ?? 0;
      handleSlideClick(idx);
    };
    window.addEventListener("rvavid:slideClick", listener as any);
    return () =>
      window.removeEventListener("rvavid:slideClick", listener as any);
  }, []);

  return (
    <div>
      <Rvavid
        title="Royal Virtual Assets"
        subtitle="Innovation in Digital Assets"
        description="Discover the future of digital assets with Royal Virtual Assets. We're pioneering new technologies and methodologies that are reshaping how we think about virtual economies, blockchain integration, and digital asset management. Our comprehensive platform offers cutting-edge solutions for businesses looking to enter the digital asset space."
        slides={slides}
        button={{
          text: "Explore Our Platform",
          href: "/platform",
        }}
      />
      <Vidrva
        videos={videos}
        activeIndex={activeVideo}
        sectionId={videoSectionId}
      />
    </div>
  );
}
