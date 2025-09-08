import Capcover, { CapSlide } from "../components/Capcover/Capcover";

const slides: CapSlide[] = [
  {
    id: 1,
    background: "/images/MTG.t-08.webp",
    overlays: [
      { src: "/images/MTG.t-04.webp" },
      { src: "/images/MTG.t-15.webp" },
      { src: "/images/MTG.t-06.webp" },
      { src: "/images/MTG.t-07.webp" },
      { src: "" },
      { src: "" },

    ],
  },
  {
    id: 2,
    background: "/images/MTG.t-08.webp",
    overlays: [
      { src: "/images/MTG.t-09.webp" },
      { src: "/images/MTG.t-15.webp" },
      { src: "" },
      { src: "" },
      { src: "/images/MTG.-16.webp" },
      { src: "" },
    ],
  },
  {
    id: 3,
    background: "/images/MTG.t-08.webp",
    overlays: [
      { src: "/images/MTG.t-12.webp" },
      { src: "/images/MTG.t-15.webp" },
      { src: "/images/MTG.t-13.webp" },
      { src: "/images/MTG.t-14.webp" },
      { src: "/images/MTG.t-16.webp" },
      { src: "/images/MTG.t-17.webp" },

    ],
  },
];

export default function CapitalAddressGroupPage() {
  return (
    <div>
      <Capcover slides={slides} autoPlayMs={7000} animationStaggerMs={350} />
    </div>
  );
}
