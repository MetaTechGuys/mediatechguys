"use client";

import Aslider, { AsliderItem } from "../components/Aslider/Aslider";

const team: AsliderItem[] = [
  {
    id: 1,
    imageSrc: "/images/Generated.webp",
    title: "Hooman Barati",
    subtitle: "Video Production Team Leader",
  },
  {
    id: 2,
    imageSrc: "/images/Generated Image September 09, 2025 - 1_49PM.webp",
    title: "Spideh Golestani",
    subtitle: "UI/UX Designer",
  },
  {
    id: 3,
    imageSrc: "/images/Generated Image September 09, 2025 - 3_24PM (1).webp",
    title: "Ali Ghorbani",
    subtitle: "Senior Full-Stack Developer",
  },
  {
    id: 4,
    imageSrc: "/images/Generated Image September 09, 2025 - 1_58PM.webp",
    title: "Kiarash Siahbandi",
    subtitle: "Full-Stack Developer",
  },
  {
    id: 5,
    imageSrc: "/images/Generated Image September 09, 2025 - 3_13PM.webp",
    title: "Mehdi Amiri",
    subtitle: "Motion Graphist",
  },
  {
    id: 6,
    imageSrc: "/images/Generated Image September 09, 2025 - 1_40PM.webp",
    title: "Mona Fazli",
    subtitle: "General Graphist",
  },{
    id: 7,
    imageSrc: "/images/Generated Image September 09, 2025 - 1_41PM (1).webp",
    title: "Maryam Kheirkhah",
    subtitle: "General Graphist",
  },
  {
    id: 8,
    imageSrc: "/images/Generated (1).webp",
    title: "Elahe Rahmani",
    subtitle: "General Graphist",
  },
  {
    id: 9,
    imageSrc: "/images/Generated Image September 09, 2025 - 3_41PM.webp",
    title: "Zahra Mostofian",
    subtitle: "Graphic Atelier Team Leader",
  },
  
];

export default function AboutPage() {
  return (
    <div style={{ padding: "0" }}>
      <Aslider items={team} visible={9} />
    </div>
  );
}
