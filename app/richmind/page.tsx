import Doublerm from "../components/Doublerm/Doublerm";
import Richtxt from "../components/richtxt/richtxt";
import Richvid from "../components/richvid/richvid";

export default function RichMindPage() {
  return (
    <div>
      <Doublerm
        leftSrc="/images/MTG.RICHMINDSITEBANNERS.V1.01.00.1404.06-02.webp"
        rightSrc="/images/MTG.RICHMINDSITEBANNERS.V1.01.00.1404.06-03.webp"
        leftLabel="RichMind"
        rightLabel="Holding"
      />
      
      <Richtxt
        title="About RichMind"
        leftColumn={[
          {
            subtitle: "Innovation",
            text: "RichMind is at the forefront of technological innovation, developing cutting-edge solutions that transform industries and create new possibilities for growth and development."
          },
          {
            subtitle: "Vision",
            text: "Our vision is to create a world where technology seamlessly integrates with human potential, enabling individuals and organizations to achieve unprecedented levels of success and fulfillment."
          }
        ]}
        rightColumn={[
          {
            subtitle: "Mission",
            text: "We are committed to delivering exceptional value through innovative products and services that empower our clients to reach their full potential and achieve their strategic objectives."
          },
          {
            subtitle: "Excellence",
            text: "Quality and excellence are the cornerstones of everything we do. We strive for perfection in every project, ensuring that our solutions exceed expectations and deliver lasting value."
          }
        ]}
      />

      <Richvid
        videoSrc="/videos/RVA.Characters.V1.0.01.1404.webm"
        title="RichMind in Action"
        description="Discover how RichMind is revolutionizing the industry with innovative solutions and cutting-edge technology."
        poster="/images/MTG.RICHMINDSITEBANNERS.V1.01.00.1404.06-02.webp"
        autoplay={false}
        muted={true}
        controls={true}
      />
    </div>
  );
}
