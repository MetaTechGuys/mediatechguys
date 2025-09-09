"use client";
import Rvavid from "../components/Rvavid/Rvavid";
import Vidrva, { VidrvaVideo } from "../components/Vidrva/Vidrva";
import { useEffect, useState, useCallback } from "react";

export default function RvaPage() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoSectionId = "vidrva-section";

  const slides = [
    {
      id: 1,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-01.webp",
      alt: "Royal Virtual Assets",
      title: "Royal Virtual Assets",
      description:
        "Royal Virtual Assets is a response to the world's growing need for secure and transparent access to digital assets. This project, built on blockchain technology, artificial intelligence, and modern user experience, is designed to serve as a bridge between investors, entrepreneurs, and users interested in the new economy. Its founding philosophy is based on transparency, trust, and innovation, with every step taken with a global and forward-thinking approach. The main focus of this project is simplifying and democratizing the most complex financial and technological concepts. Digital assets are still considered a complex and confusing topic for many users, but Royal Virtual Assets has brought this world closer to reality through simple language and user-friendly tools. Along this path, we have not only provided a secure investment platform but have also paid special attention to education and awareness. The core value of Royal Virtual Assets lies in its ability to combine three seemingly different domains: creative marketing, advanced technology, and human experience. This combination has transformed the project from a purely technological product into a living and dynamic ecosystem. In this ecosystem, the user is not just a service consumer but an active member and participant in developing the future.",
    },
    {
      id: 2,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-02.webp",
      alt: "Digital Marketing",
      title: "Exclusive Videos and Visual Content",
      description:
        "One of the key pillars of introducing Royal Virtual Assets was the production of an extensive collection of exclusive videos. These videos were not merely promotional in nature, but were designed with an educational and story-driven approach so that audiences could understand the fundamental and complex concepts of blockchain, cryptocurrencies, and NFTs in a simple and engaging way. Each video reflects a part of the brand identity and creates a fresh experience for the user. In the process of producing these videos, various techniques such as motion graphics, animated infographics, and cinematic editing were used. The goal was to ensure that every audience member, whether a financial market expert or a newcomer user, could understand the core message. This comprehensive approach made the videos simultaneously both educational tools and marketing media. The videos were used not only on the official website but also in social media campaigns, online events, and B2B presentations. This versatility multiplied the value of investment in visual content production. Each video was able to function as an independent tool in the audience acquisition process.",
    },
    {
      id: 3,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-03.webp",
      alt: "Capital Address Group",
      title: "Dedicated Website",
      description:
        "The Royal Virtual Assets website was designed as the main entry point for users. This site, with a modern and minimal approach, not only provides information about services and products, but has also created a simple and smooth path for user discovery and interaction through professional user experience design. Every section of the site is built with the goal of conveying a sense of trust and professionalism. One of the key features of the site is its precise information architecture. From the introduction page to the articles and market analysis section, everything is arranged in a specific order so that users can access the most information in the least amount of time. This structure is particularly important for users who make important financial decisions. In addition to introducing services, the website also provides a platform for education. The blog and analytical articles section is regularly updated so that users can follow the latest trends in the digital market. These contents have practically turned the site into a reliable information reference.",
    },
    {
      id: 4,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-04.webp",
      alt: "Asar Sazan Properties",
      title: "Dedicated AI Assistant",
      description:
        "One of the achievements of Royal Virtual Assets was the development of a dedicated AI assistant. This intelligent tool was designed with the goal of simplifying user experience and providing instant consultation. Users could ask their questions about digital assets at any moment and receive quick and accurate answers. This AI assistant was connected to live databases and analytical algorithms. Therefore, in addition to answering general questions, it was able to provide personalized analyses based on market data. This feature elevated the user experience to a level beyond that of a regular website or application. The artificial intelligence was designed to be learning and adaptive. Over time and with increased user interaction, the responses became more accurate and personalized. This feature gained user trust and encouraged them to use the platform continuously. The Royal Virtual Assets AI assistant was not just a technological tool, but also established the brand identity as a pioneer of innovation and technology in users' minds.",
    },
    {
      id: 5,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-06.webp",
      alt: "RichMind Holding",
      title: "Social Networks",
      description:
        "To expand communication with users, official Royal Virtual Assets channels were created and managed on social networks. These channels served as live media for direct communication with audiences, and their content included education, news, and instant notifications. One of the advantages of these networks was the ability to create a dynamic community around the brand. Users were not only the audience of messages but also active participants in conversations. This level of interaction made Royal Virtual Assets transform from a brand into a living community. The social media content strategy was designed so that each post would simultaneously have both educational and marketing value. The combination of graphic images, short videos, and educational texts helped effectively convey the message. Finally, social networks became a platform for hearing the voice of the audience. User feedback, questions, and even criticisms were directly transmitted to the team and used in the continuous improvement of the project.",
    },
    {
      id: 6,
      src: "/images/MTG.sitebanner.insidepages.v1.01.00.1404.06.16-08.webp",
      alt: "HighEnd Restaurant",
      title: "Last but not least",
      description:
        "Finally, Royal Virtual Assets has entered the field with the vision of becoming a reliable reference for digital asset investors and users. Our mission is not merely to create a platform, but to design a sustainable future for the digital world—a future where trust, transparency, and innovation take precedence. Positive feedback from audiences showed that Royal Virtual Assets videos were able to build a strong and professional brand image. These feedbacks taught us that investing in content is not an expense, but a sustainable asset for the brand. Finally, the visual design of the website is aligned with the brand identity of videos and social networks. Colors, fonts, and images were chosen in such a way as to convey a sense of unity and professionalism to the user.",
    },
  ];

  const videos: VidrvaVideo[] = [
    {
      id: 1,
      src: "/videos/RVA.Characters.V1.0.01.1404.webm",
      poster: slides[0].src,
      title: slides[0].title,
    },
    {
      id: 2,
      src: "/videos/RVA.Coming soon.V1.0.01.1404.05.webm",
      poster: slides[1].src,
      title: slides[1].title,
    },
    {
      id: 3,
      src: "/videos/RVA.Future city.V1.0.01.1404.06.webm",
      poster: slides[2].src,
      title: slides[2].title,
    },
    {
      id: 4,
      src: "/videos/RVA.Transparency.V1.0.02.1404.02.webm",
      poster: slides[3].src,
      title: slides[3].title,
    },
    {
      id: 5,
      src: "/videos/RVA.Security.V1.0.01.1404.02.webm",
      poster: slides[4].src,
      title: slides[4].title,
    },
    {
      id: 6,
      src: "/videos/RVA.Tokenize.V1.0.02.1404.04.webm",
      poster: slides[5].src,
      title: slides[5].title,
    },
  ];

  const handleSlideClick = useCallback(
    (index: number) => {
      setActiveVideo(index);
      const el = document.getElementById(videoSectionId);
      console.log("Looking for element with ID:", videoSectionId);
      console.log("Found element:", el);
      if (el) {
        const rect = el.getBoundingClientRect();
        console.log("Element rect:", rect);
        const offset = 0; // rely on CSS scroll-margin-top for header spacing
        const targetY = window.scrollY + rect.top - offset;
        console.log("Current scrollY:", window.scrollY);
        console.log("Target scrollY:", targetY);
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      } else {
        console.log("Element not found!");
      }
    },
    [videoSectionId]
  );

  // Listen to slide clicks from Rvavid and map to video selection
  useEffect(() => {
    const listener = (e: CustomEvent<{ index: number }>) => {
      const idx = e?.detail?.index ?? 0;
      handleSlideClick(idx);
    };
    window.addEventListener("rvavid:slideClick", listener as EventListener);
    return () =>
      window.removeEventListener(
        "rvavid:slideClick",
        listener as EventListener
      );
  }, [handleSlideClick]);

  return (
    <div>
      <Rvavid
        title="Royal Virtual Assets"
        // subtitle="Innovation in Digital Assets"
        description="Discover the future of digital assets with Royal Virtual Assets. We're pioneering new technologies and methodologies that are reshaping how we think about virtual economies, blockchain integration, and digital asset management. Our comprehensive platform offers cutting-edge solutions for businesses looking to enter the digital asset space."
        slides={slides}
        // button={{
        //   text: "Explore Our Platform",
        //   href: "/platform",
        // }}
      />
      <Vidrva
        videos={videos}
        activeIndex={activeVideo}
        sectionId={videoSectionId}
        onVideoChange={setActiveVideo}
      />
    </div>
  );
}
