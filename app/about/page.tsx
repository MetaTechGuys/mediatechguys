"use client";

import Aslider, { AsliderItem } from "../components/Aslider/Aslider";
import Aleft from "../components/Aleft/Aleft";
import Aright from "../components/Aright/Aright";

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
  },
  {
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
    <div style={{ padding: " 0rem" }}>
      <Aleft
        title="About Us"
        description="MediaTechGuys is an international marketing and consulting agency that operates with a focus on innovation, strategy, and creativity. We help brands in the Middle East and Europe recreate their narrative, optimize their organizational structure, and create a unique experience for their customers. Our philosophy is based on combining marketing knowledge, modern technologies, and human experience design."
        mediaSrc="/images/cinemacamera.sitebanner.v1.01.001404.06.18-01-01.webp"
        mediaAlt="Our mission in action"
        mediaType="image"
      />

      <Aright
        title=""
        description="In our collaboration with clients, we are not just a service provider; we stand alongside them as a strategic partner. From the feasibility study and business plan development stage to visual identity design, brand book, advertising campaigns, and social media management, every step is taken with a long-term and sustainable perspective. Our goal is for each brand to not only be seen but to remain memorable in the audience's mind and heart."
        mediaSrc="/videos/we are mtg.webm"
        mediaAlt="Our vision for the future"
        mediaType="video"
      />

      <Aleft
        title=""
        description="The MediaTechGuys team consists of multidisciplinary specialists: marketers, designers, strategists, web developers, and content creators who together provide a complete ecosystem of services. We believe that real success lies in the details; that's why we carry out every project with precision, coherence, and commitment to global quality. "
        mediaSrc="/videos/Next story begins.webm"
        mediaAlt="Our core values"
        mediaType="video"
      />
      <Aright
        title=""
        description="Today, MediaTechGuys is more than a marketing agency; we are a growth platform that helps brands redefine themselves on an international scale. Our mission is to create stories that inspire, values that endure, and identities that align with the future."
        mediaSrc="/images/cinemacamera.sitebanner.v1.01.001404.06.18-02.webp"
        mediaAlt="Our vision for the future"
        mediaType="image"
      />

      {/* <Aleft
        title="CEO Introduction - Dr. Aram Mousavi"
        description="Dr. Aram Mousavi, founder and CEO of MTG Group, is a recognized figure in management and business development in Iran, Europe, and the Middle East. Drawing on his academic knowledge and extensive experience in strategy, innovation, and future studies, he has transformed MTG into a reference organization and leader in the field of marketing and branding. With a systematic and international perspective, Dr. Aram Mousavi has elevated MTG beyond the framework of a marketing agency, transforming it into a platform for interdisciplinary expertise synergy, including data-driven marketing, brand management, organizational creativity, and emerging technologies. The combination of academic knowledge and real market experience has given his decision-making both scientific and practical dimensions, laying the groundwork for sustainable and competitive growth for MTG's clients. From his perspective, brands will only endure when they can create real value and distinctive experiences for customers, in addition to their market presence. Under Dr. Aram Mousavi's leadership, MTG's mission is to become a strategic partner for brands on their path to growth and excellence—a path that leads not only to today's profitability but to building a bright and lasting future for clients."
        mediaSrc="/images/Generated (3).webp"
        mediaAlt="Our core values"
        mediaType="image"
      />

      <Aright
        title="CMO Introduction - Saeid Sadeghi"
        description="Saeed Sadeghi, Chief Marketing Officer (CMO) at MTG Group, is one of the prominent and influential managers in the field of marketing and branding. With MBA, MIB, and Master of Architecture degrees from prestigious universities in Italy, India, and Iran, he has been able to develop an interdisciplinary and unique approach to marketing management and brand development. Throughout his professional career, Sadeghi has led and advised prestigious domestic and international brands. His work portfolio includes collaborations with brands such as Arova Tools, Arena Hayat Danesh, KMP, Natures Only, Pharmaton, Samsung, Bioplus, GSK, and Bam Automotive. The diversity of these brands, spanning from pharmaceutical and health industries to technology, tools, and automotive sectors, demonstrates his special ability to adapt strategies to different market conditions and needs. His professional perspective on marketing is based on the connection between science and creativity—science that relies on data and precise analysis, and creativity that is grounded in deep understanding of customer behavior and creating lasting experiences. His main mission at MTG is to design sustainable growth paths for brands, develop data-driven and experience-driven marketing structures, and guide specialized teams toward creating a leading position for MTG and its clients in the field of marketing and branding."
        mediaSrc="/images/Generated (2).webp"
        mediaAlt="Our expertise and skills"
        mediaType="image"
      /> */}

      <Aslider items={team} visible={9} />
    </div>
  );
}
