import Capcover, { CapSlide } from "../components/Capcover/Capcover";
import Richtxt from "../components/richtxt/richtxt";

const slides: CapSlide[] = [
  {
    id: 1,
    background: "/images/MTG.t-08.webp",
    overlays: [
      { src: "/images/MTG.t-04.webp" },
      { src: "/images/MTG.t-15.webp" },
      { src: "/images/MTG.t-06.webp" },
      { src: "/images/MTG.t-07.webp" },
      { src: "" },
      { src: "" },
    ],
  },
  {
    id: 2,
    background: "/images/MTG.t-08.webp",
    overlays: [
      { src: "/images/MTG.t-09.webp" },
      { src: "/images/MTG.t-15.webp" },
      { src: "" },
      { src: "/images/MTG.-16.webp" },
      { src: "" },
      { src: "" },
    ],
  },
  {
    id: 3,
    background: "/images/MTG.t-08.webp",
    overlays: [
      { src: "/images/MTG.t-12.webp" },
      { src: "/images/MTG.t-15.webp" },
      { src: "/images/MTG.t-13.webp" },
      { src: "/images/MTG.t-14.webp" },
      { src: "/images/MTG.t-16.webp" },
      { src: "/images/MTG.t-17.webp" },
    ],
  },
];

export default function CapitalAddressGroupPage() {
  return (
    <div>
      <Capcover slides={slides} autoPlayMs={8000} animationStaggerMs={400} />
      <div className="cag-rich">
        <Richtxt
          title="The Future of Economic Decision-Making"
          leftColumn={[
            {
              subtitle: "The Future of Economic Decision-Making",
              text: "Capital Address Group was established as one of the strategic arms of MediaTechGuys to advise organizations and businesses in the domain of the new economy and data-driven decision-making. This project was formed with the aim of combining management expertise, technological innovation, and user experience design, and today it is recognized as a credible reference in economic analysis and solutions. The core focus of this project was to solidify the group’s position on an international level. We aimed to present the brand in a way that would appeal both to traditional executives and to actors within modern economic ecosystems. This blend of tradition and innovation has turned Capital Address Group into a unique brand. From the outset, it was clear the brand needed a coherent structure and a fresh image to appear with clarity and strength in the market. Therefore, MediaTechGuys designed and executed a set of strategic and operational actions across several key areas. The result is a brand that—now with a unified visual identity, a professional website, and a modern governance structure—is ready to enter larger arenas and pursue international collaborations.",
            },
            {
              subtitle: "Governance Structure Consulting",
              text: "One of our first steps with Capital Address Group was providing comprehensive consulting on corporate governance structures. This phase aimed to create transparency in decision-making processes, define responsibilities, and strengthen trust between shareholders and executives. In this consultation, various governance models were reviewed and adapted to the specific needs of Capital Address Group. By designing a governance roadmap, we redefined the roles of the board of directors, specialized committees, and executive managers to make processes more efficient and decisions more transparent. A key highlight of this process was attention to international standards and tailoring them to local conditions. This hybrid approach made the governance structure not only efficient but also trustworthy for foreign investors. Ultimately, this enabled Capital Address Group to enter regional and global markets with greater confidence and to initiate successful strategic partnerships.",
            },
          ]}
          rightColumn={[
            {
              subtitle: "Visual Identity Design",
              text: "Following the governance consulting, the next step was redesigning the brand’s visual identity. We sought to create an identity that conveyed the seriousness and credibility of a consulting firm while highlighting its innovation and forward-looking vision. The new logo was designed with modern, clean lines to express clarity and strength. The selected color palette combined calm yet powerful tones to evoke trust and professionalism. Beyond the logo, a set of graphic patterns, typefaces, and visual materials was developed and applied across all brand channels—from business cards and letterheads to presentations and official reports. This consistency ensured that audiences received a unified brand image at every touchpoint. The outcome of the visual identity redesign was that Capital Address Group could present itself not merely as a consulting company, but as a modern, credible, and international brand.",
            },
            {
              subtitle: "Dedicated Website",
              text: "The final part of the project was designing and developing the Capital Address Group website. It was built as the brand’s digital showcase to present all services, projects, and values in a clear and professional manner. The website’s structure was built on a simple and efficient user experience. From the homepage to the services section and analytical articles, everything was designed so users could access the information they need in the shortest time. The visual design was aligned with the brand identity; colors, typography, and imagery were selected to simultaneously communicate seriousness and innovation. This alignment made the website a strong touchpoint for the brand. In the end, the Capital Address Group website is not just an information tool; it is a platform for engagement, customer acquisition, and strengthening relationships with investors and partners.",
            },
          ]}
        />
      </div>
    </div>
  );
}
