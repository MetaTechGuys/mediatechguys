import Asarcover from "../components/Asarcover/Asarcover";
import Richtxt from "../components/richtxt/richtxt";

export default function AsarsazanPage() {
  return (
    <div>
      <Asarcover
        leftSrc="/images/1-02.webp"
        rightSrc="/images/1-01.webp"
        leftText="Asar Sazan Properties"
        leftAlt="Asar Sazan Left"
        rightAlt="Asar Sazan Right"
      />
      <Richtxt
        title="About Asar Sazan"
        leftColumn={[
          {
            subtitle: "Our Vision",
            text: "Creating premium, human-centered living spaces with lasting value and design integrity.",
          },
          {
            subtitle: "Craftsmanship",
            text: "Every detail is engineered with precision, from materials to modern amenities.",
          },
        ]}
        rightColumn={[
          {
            subtitle: "Sustainability",
            text: "Energy-conscious systems and sustainable construction practices built into every project.",
          },
          {
            subtitle: "Experience",
            text: "A seamless journey from concept to completion, guided by an expert team.",
          },
        ]}
      />
    </div>
  );
}
