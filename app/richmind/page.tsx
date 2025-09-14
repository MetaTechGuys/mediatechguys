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
        title="About RichMind Holding"
        leftColumn={[
          {
            subtitle: "The Future of Business with a Fresh Face",
            text: "RichMind Holding, as one of the key arms of MediaTechGuys, has always moved forward with a forward-looking and global perspective. This holding company, active in diverse fields such as investment, development, fintech, real estate, and media, decided to redefine its identity through a comprehensive rebranding project to align with its new vision. The goal of this brand recreation was to create a more modern, transparent image that aligns with current global market values. The RichMind Holding rebranding was not just a visual change; it involved deep reflection on the brand's essence, message, and position. This process began with extensive research on target markets, competitors, and global trends, ultimately leading to the design of a structure that was both rooted in brand authenticity and demonstrated the capacity for future growth. From these changes emerged a new identity in which concepts such as trust, innovation, and sustainability are more prominent than ever. The brand is no longer just a commercial name, but has become a symbol of long-term vision in international investment and development. This transformation prepared RichMind Holding to enter global arenas with greater strength and gain a more prominent position in the minds of audiences and business partners.",
          },
          {
            subtitle: "Rebranding Project",
            text: "The RichMind Holding rebranding project was defined and implemented in several phases. First, the research and analysis phase was conducted; in this phase, all strengths and weaknesses of the current brand, audience awareness, and brand position in international markets were examined. Then, using the results of these analyses, the rebranding strategy was formulated. In the next phase, the MediaTechGuys creative team, focusing on RichMind Holding's fundamental values, designed a new path for redefining the brand message. The new brand narrative was built on three principles: 'Innovation in Investment,' 'Transparency in Performance,' and 'Sustainability in Development.' One of the highlights of this project was aligning all communication channels with the new brand. From written language in official documents to advertising content and even the way of interacting with investors, everything was designed and implemented based on new standards. The result of this rebranding was the creation of a strong yet dynamic brand that was able to present a more professional and modern image of RichMind Holding to audiences.",
          },
        ]}
        rightColumn={[
          {
            subtitle: "Redefined Visual Identity",
            text: "Redefining the visual identity was one of the focal points of this project. The new logo, combining modern lines and carefully selected colors, presented a fresh and powerful image of the brand. The redesigned color palette, based on color psychology, conveys messages of trust, sustainability, and growth. Alongside the logo and colors, typography and graphic patterns were also updated. Official fonts for legal and corporate documents were combined with modern fonts for websites and digital media to convey both a sense of credibility and innovation. In addition to basic visual elements, a complete brand material system was designed; from business cards and letterheads to motion graphics templates and advertising kits. This visual consistency ensures that at every point of contact with the audience, a consistent and professional brand image is displayed. With this redesign, RichMind Holding was able to introduce itself to the market not just as an investment holding company, but as a brand with a modern and value-driven face.",
          },
          {
            subtitle: "New Website Design",
            text: "Simultaneously with the redefinition of the visual identity, the RichMind Holding website was completely redesigned. The new version of the site was built on a simple, transparent, and inspiring user experience so that colleagues, investors, and audiences could easily familiarize themselves with the brand's services and projects. The minimal and modern design of the site was based on the brand's new colors and typography. This design not only paid attention to aesthetics but also prioritized quick and easy access to key information. One of the new features of the website was the 'Projects Dashboard' section, which provided the ability to browse the latest activities and reports of RichMind Holding. This section was designed with the goal of increasing transparency and interaction, giving visitors a clear view of the scope of the holding's activities. The new website is now not just an information tool, but an interactive platform for showcasing the power, scope, and forward-thinking vision of RichMind Holding.",
          },
        ]}
        images={[
          "/images/carsel2-01-01.webp",
          "/images/richmindsite-01.webp",
          "/images/carsel-02.webp",
        ]}
        layout="four-row"
      />

      <Richvid
        videoSrc="/videos/Richmind.Corporate video.V1.0.02.1404.02_2.webm"
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
