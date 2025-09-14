import Slider from "../components/Slider/Slider";

export default function Projects() {
  // Consistent layers for all slides
  const consistentBackground =
    "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-2-14-19.webp";
  const consistentSecondLayer = {
    id: 99, // High ID to avoid conflicts
    src: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-2-14-21.webp",
    alt: "Consistent Second Layer",
    opacity: 1,
    blendMode: "normal" as const, // Default blend mode that does nothing
  };

  const sliderSlides = [
    {
      id: 1,
      title: "",
      description: "",
      images: [
        {
          id: 1,
          src: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-2-14-20.webp",
          alt: "Royal Virtual Assets Main",
          opacity: 1,
          blendMode: "normal" as const,
        },
        consistentSecondLayer, // Same for all slides
        {
          id: 3,
          src: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-2-14-22.webp",
          alt: "Royal Virtual Assets Accent",
          opacity: 1,
          blendMode: "normal" as const,
        },
      ],
    },
    {
      id: 2,
      title: "",
      description: "",
      images: [
        {
          id: 4,
          src: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-2-14-20.webp",
          alt: "Capital Address Group Main",
          opacity: 1,
          blendMode: "normal" as const,
        },
        consistentSecondLayer, // Same for all slides
        {
          id: 6,
          src: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-2-14-22.webp",
          alt: "Capital Address Group Accent",
          opacity: 1,
          blendMode: "normal" as const,
        },
      ],
    },
    {
      id: 3,
      title: "",
      description: "",
      images: [
        {
          id: 7,
          src: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-2-14-20.webp",
          alt: "RichMind Holding Main",
          opacity: 1,
          blendMode: "normal" as const,
        },
        consistentSecondLayer, // Same for all slides
        {
          id: 9,
          src: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-2-14-22.webp",
          alt: "RichMind Holding Accent",
          opacity: 1,
          blendMode: "normal" as const,
        },
      ],
    },
  ];

  return (
    <div>
      <Slider
        slides={sliderSlides}
        backgroundImage={consistentBackground}
        autoPlay={true}
        autoPlayInterval={4000}
        showDots={true}
        showArrows={true}
      />
    </div>
  );
}
