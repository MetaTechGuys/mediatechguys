
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
        src="/images/MTG.sitebanner.v1.01.00.1404.06.05-04.webp"
        alt="Richmind cover"
        title="RichMind Holding"
        subtitle="Future of Digital Marketing"
        priority
        button={{
          text: "Explore More",
          href: "/projects"
        }}
      />
    </div>
  );
}
