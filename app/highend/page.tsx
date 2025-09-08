import Rcover from "../components/Rcover/Rcover";

export default function HighEndPage() {
  return (
    <div>
      <Rcover
        slides={[
          {
            kind: "double",
            topSrc: "/images/2-09.webp",
            leftSrc: "/images/2-03.webp",
            rightSrc: "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-24.webp",
            altTop: "HighEnd top",
            altLeft: "HighEnd left",
            altRight: "HighEnd right",
          },
          {
            kind: "content",
            topSrc: "/images/2-11.webp",
            imageSrc: "/images/2-02.webp",
            title: "HighEnd Restaurant",
            subtitle: "A Delicious Memory",
            description: "Premium dining experience with curated flavors.",
          },
          {
            kind: "content",
            topSrc: "/images/2-10.webp",
            imageSrc: "/images/2-04.webp",
            title: "HighEnd Restaurant",
            subtitle: "A Delicious Memory",
            description: "Premium dining experience with curated flavors.",
          },
          {
            kind: "content",
            topSrc: "/images/2-12.webp",
            imageSrc: "/images/2-08.webp",
            title: "HighEnd Restaurant",
            subtitle: "A Delicious Memory",
            description: "Premium dining experience with curated flavors.",
          },
        ]}
        priorityTop
        prioritySides
      />
    </div>
  );
}
