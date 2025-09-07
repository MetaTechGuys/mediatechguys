import Slider from "../components/Slider/Slider";

export default function Projects() {
  const sliderImages = [
    {
      id: 1,
      src: "/images/MTG-02.webp",
      alt: "Royal Virtual Assets",
      title: "Royal Virtual Assets",
      description: "Future of Digital Assets",
      opacity: 0.6,
      blendMode: "multiply" as const,
    },
    {
      id: 2,
      src: "/images/MTG-03.webp",
      alt: "Digital Marketing",
      title: "Digital Marketing Excellence",
      description: "Start your Digital Marketing journey with us!",
      opacity: 0.5,
      blendMode: "overlay" as const,
    },
    {
      id: 3,
      src: "/images/MTG-04.webp",
      alt: "Capital Address Group",
      title: "Capital Address Group",
      description: "Future of Economy",
      opacity: 0.7,
      blendMode: "soft-light" as const,
    },
    {
      id: 4,
      src: "/images/MTG-05.webp",
      alt: "Asar Sazan Properties",
      title: "Asar Sazan Properties",
      description: "Future of Architecture",
      opacity: 0.6,
      blendMode: "color-burn" as const,
    },
    {
      id: 5,
      src: "/images/MTG-07.webp",
      alt: "RichMind Holding",
      title: "RichMind Holding",
      description: "Future of Business",
      opacity: 0.5,
      blendMode: "screen" as const,
    },
    {
      id: 6,
      src: "/images/MTG-08.webp",
      alt: "HighEnd Restaurant",
      title: "HighEnd Restaurant",
      description: "A Delicious Memory",
      opacity: 0.6,
      blendMode: "hard-light" as const,
    },
  ];

  return (
    <div>
      <Slider
        images={sliderImages}
        backgroundImage="/images/MTG-03.webp"
        autoPlay={true}
        autoPlayInterval={4000}
        showDots={true}
        showArrows={true}
      />
    </div>
  );
}
