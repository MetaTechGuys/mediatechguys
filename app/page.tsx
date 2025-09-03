
import Herocover from "./components/Herocover/Herocover";
import Procover from "./components/Procover/Procover";

export default function Home() {
  return (
    <div>
      <Herocover
        src="/images/MTG.sitebanner.v1.01.00.1404.06.05-03.webp"
        alt="Hero cover"
        title=""
        subtitle="Start your Digital Marketing with us!"
        priority
      />
      <Procover
        src="/images/MTG-01.webp"
        alt="Richmind cover"
        title="RichMind Holding"
        subtitle="Future of Digital Marketing"
        priority
        button={{
          text: "Explore More",
          href: "/projects"
        }}
      />
      <Procover
        src="/images/MTG-02.webp"
        alt="RVA cover"
        title="Royal Virtual Assets"
        subtitle="Future of Digital Assets"
        priority
        button={{
          text: "Explore More",
          href: "/projects"
        }}
      />
      <Procover
        src="/images/MTG-04.webp"
        alt="Capital Address Group cover"
        title="Capital Address Group"
        subtitle="Future of Economy"
        priority
        button={{
          text: "Explore More",
          href: "/projects"
        }}
      />
      <Procover
        src="/images/MTG-05.webp"
        alt="Asar Sazan cover"
        title="Asar Sazan Properties"
        subtitle="Future of Architecture"
        priority
        button={{
          text: "Explore More",
          href: "/projects"
        }}
      />
    </div>
  );
}
