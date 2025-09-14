import Asarcover from "../components/Asarcover/Asarcover";
import Richtxt from "../components/richtxt/richtxt";

export default function AsarsazanPage() {
  return (
    <div>
      <Asarcover
        leftSrc="/images/1-02.webp"
        rightSrc="/images/1-01.webp"
        leftText="Asar Sazan"
        leftAlt="Asar Sazan Left"
        rightAlt="Asar Sazan Right"
      />
      <div className="asar-rich">
        <Richtxt
          title="About Asar Sazan"
          leftColumn={[
            {
              subtitle: "Architecture for a Sustainable Future",
              text: "Asar Sazan Javdan is a leading company in construction and real estate investment, known for its modern approach to sustainable architecture and transparency in investment. Our collaboration at MediaTechGuys was an opportunity to elevate the company’s organizational structure, brand identity, and digital communications to a global standard. Our main focus in this project was creating clarity and cohesion—because as an international construction company, Asar Sazan needed to present a unified and professional image across all touchpoints, from organizational structure to the website. From corporate governance consulting to producing a brand book, website design, and content production, every step was taken to solidify Asar Sazan’s position as a reputable, trustworthy, and forward-thinking brand. Today, thanks to these transformations, Asar Sazan is recognized not only in the domestic market but also internationally as a company that meets global standards. One of the first steps in the Asar Sazan project was providing comprehensive consulting on corporate governance. The goal was to clarify decision-making processes, define roles and responsibilities, and improve managerial efficiency. In this phase, the structure of the board of directors, specialized committees, and oversight systems was redesigned. This redesign established a balance between authority and accountability, enabling faster and more precise decision-making. We aligned international corporate governance standards with local conditions. This approach increased trust among both domestic shareholders and international investors in the company’s management processes. The result was a framework that not only improved internal efficiency but also strengthened Asar Sazan’s external image as a transparent and accountable organization.",
            },
            {
              subtitle: "Dedicated Website",
              text: "The Asar Sazan website was designed as the brand’s digital showcase to present all projects, services, and company values in a modern and user-friendly format. The site’s design is based on a simple, seamless user experience. From the homepage to the projects and news sections, everything was crafted to present a clear and professional image of the brand. Special emphasis was placed on showcasing ongoing projects and company achievements. This not only served as a reference of trust for potential clients but also for investors. Today, the new Asar Sazan website is not just an information tool; it is a platform for engagement, customer acquisition, and communicating brand values to the target audience.",
            },
          ]}
          rightColumn={[
            {
              subtitle: "Content Production from Ongoing Projects",
              text: "The final part of our collaboration with Asar Sazan focused on content production from the company’s ongoing projects. The goal was to document and showcase the progress of projects and create transparency for clients and investors. Using visual reports, documentary-style videos, and detailed written content, we told the story of each project. This content was used not only on the website and social media but also in formal presentations and advertising campaigns. Our focus was to ensure that the content conveyed a sense of trust and assurance. Transparent presentation of construction phases helped clients invest with greater confidence and build stronger engagement with the projects. Ultimately, content production from ongoing projects became a key branding tool for Asar Sazan—one that positions the company as transparent, professional, and committed to quality.",
            },
            {
              subtitle: "Brand Book – A Roadmap for Organizational Identity",
              text: "One of our most important deliverables for Asar Sazan was a comprehensive brand book. This document serves as a roadmap for the company’s visual and communication identity, providing a clear framework for the use of the logo, colors, typography, and other brand elements. The brand book was designed to support not only day-to-day communication needs (such as business cards and letterheads) but also larger initiatives like advertising campaigns and international presentations. Principles of sustainable architecture and Asar Sazan’s distinctive identity were directly reflected in the brand book. As a result, the document became more than just a graphic guide—it became a tool for conveying the company’s values and vision. Today, the brand book ensures that at every touchpoint—whether in digital media or in-person communications—the brand is presented consistently and professionally.",
            },
            
          ]}
          images={[
            "/images/1-01.webp",
            "/images/1-02.webp",
            "/images/MTG.sitebanner.inside.v1.01.00.1404.06.17-30.webp",
          ]}
          layout="four-row"
        />
      </div>
    </div>
  );
}
