"use client";

import Aslider, { AsliderItem } from "../components/Aslider/Aslider";

const team: AsliderItem[] = [
  {
    id: 1,
    imageSrc: "/images/2.webp",
    title: "Hooman Barati",
    subtitle: "Video Production Team Leader",
  },
  {
    id: 2,
    imageSrc: "/images/6.webp",
    title: "Spideh Golestani",
    subtitle: "UI/UX Designer",
  },
  {
    id: 3,
    imageSrc: "/images/4.webp",
    title: "Ali Ghorbani",
    subtitle: "Senior Full-Stack Developer",
  },
  {
    id: 4,
    imageSrc: "/images/8.webp",
    title: "Kiarash Siahbandi",
    subtitle: "Full-Stack Developer",
  },
  {
    id: 5,
    imageSrc: "/images/5.webp",
    title: "Mehdi Amiri",
    subtitle: "Motion Graphist",
  },
  {
    id: 6,
    imageSrc: "/images/7.webp",
    title: "Mona Fazli",
    subtitle: "General Graphist",
  },{
    id: 7,
    imageSrc: "/images/9.webp",
    title: "Maryam Kheirkhah",
    subtitle: "General Graphist",
  },
  {
    id: 8,
    imageSrc: "/images/1.webp",
    title: "Elahe Rahmani",
    subtitle: "General Graphist",
  },
  {
    id: 9,
    imageSrc: "/images/3.webp",
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
