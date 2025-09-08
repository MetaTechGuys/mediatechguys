import Rcover from "../components/Rcover/Rcover";

export default function CandoPage() {
  return (
    <div>
      <Rcover
        slides={[
          {
            kind: "double",
            topSrc: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-14.webp",
            leftSrc:
              "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-12.webp",
            rightSrc:
              "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-13.webp",
            altTop: "Cando top",
            altLeft: "Cando left",
            altRight: "Cando right",
          },
          {
            kind: "content",
            topSrc: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-22.webp",
            imageSrc: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-20.webp",
            title: "Cando Restaurant",
            subtitle: "A Delicious Experience",
            description: "Taste that keeps you coming back.",
          },
          {
            kind: "content",
            topSrc: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-3-14.webp",
            imageSrc: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-17.webp",
            title: "Cando Restaurant",
            subtitle: "A Delicious Experience",
            description: "Taste that keeps you coming back.",
          },
          {
            kind: "content",
            topSrc: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-3-20.webp",
            imageSrc: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-18.webp",
            title: "Cando Restaurant",
            subtitle: "A Delicious Experience",
            description: "Taste that keeps you coming back.",
          },
          {
            kind: "content",
            topSrc: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-15.webp",
            imageSrc: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-19.webp",
            title: "Cando Restaurant",
            subtitle: "A Delicious Experience",
            description: "Taste that keeps you coming back.",
          },
        ]}
        priorityTop
        prioritySides
      />
    </div>
  );
}
