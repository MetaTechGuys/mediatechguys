import Clcover, { ClcoverSlide } from "../components/Clcover/Clcover";
import Richvid from "../components/richvid/richvid";

export default function CryptolandPage() {
  const slides: ClcoverSlide[] = [
    {
      title: "The Future of Digital Assets in a Secure Environment",
      subtitle: "",
      description:
        "CryptoLand was created to build an innovative and reliable platform for investing in and exchanging digital assets. The goal was not only to enter the world of cryptocurrencies, but also to establish a transparent business model and standardized processes to secure a distinct position in the global market. MediaTechGuys accompanied CryptoLand by conducting feasibility studies, designing a business plan, developing the website, and crafting a unique visual identity—laying the groundwork needed to launch and grow the project. Our focus in this collaboration was to ensure that CryptoLand would not be “just a startup,” but a powerful, forward-looking brand—one that earns users’ trust while appealing to international investors. Today, CryptoLand stands as a symbol of the fusion of technology, innovation, and strategy—ready to enter the digital asset ecosystem with strength.",
      imageSrc: "/images/MTGCRYPTOLAND..SITEBANNERS.V1.01.00.1404.06-02.webp",
    },
    {
      title: "Feasibility Studies",
      subtitle: "",
      description:
        "The first step was a comprehensive feasibility study to assess market conditions, identify opportunities and risks, and analyze the project’s technical and financial dimensions. By examining global crypto trends, legal landscapes in target countries, and the required technical capacity, we charted a clear roadmap for feasibility and development. This stage gave the founders a precise, realistic outlook. Financial analyses were also a key part of the study. Cost modeling, revenue forecasting, and designing revenue models enabled us to present a sustainable path to ROI. Ultimately, these studies ensured that CryptoLand entered the market not on hype, but on data and rigorous analysis.",
      imageSrc: "/images/oystra-3.webp",
    },
    {
      title: "Business Plan – A Strategic Roadmap",
      subtitle: "",
      description:
        "Following the feasibility study, we developed a comprehensive business plan for CryptoLand. This strategic document serves as the project’s roadmap, covering all business dimensions from objectives to execution. The plan details key sections including market analysis, revenue models, marketing strategy, organizational structure, and financial planning—each designed with an operational, executable lens to ensure a clear and sustainable growth path. A key feature of this plan is its flexibility. Given the fast-changing crypto landscape, it was designed to adapt quickly to new market conditions. This business plan enabled CryptoLand to present a professional, future-focused image to both reputable investors and internal stakeholders.",
      imageSrc: "/images/oystra-1.webp",
    },
    {
      title: "Dedicated Website",
      subtitle: "",
      description:
        "The CryptoLand website was designed as the project’s digital showcase. Its goals: presenting services, communicating transparently with users, and creating a secure platform for interaction. The design drew from the brand’s new visual identity. The combination of colors, imagery, and modern typography created a digital, future-oriented atmosphere well aligned with the nature of the crypto market. Key sections—About, Team, Services, News, and Market Analysis—were structured so users can quickly access what they need. Today, the CryptoLand website is not just an introduction tool; it’s a strategic platform for user acquisition and strengthening relationships with investors.",
      imageSrc: "/images/oystra-4.webp",
    },
    {
      title: "Brand Visual Identity",
      subtitle: "",
      description:
        "The final part of the project was designing CryptoLand’s visual identity—crafted to simultaneously convey seriousness and innovation. The logo combines modern forms and minimal lines to reflect the digital realm and the dynamism of the crypto market. The color palette blends energetic yet trustworthy tones, communicating security and innovation. Alongside the logo and colors, a complete brand system—including typography, graphic patterns, and marketing materials—was designed to ensure a unified, professional presence across all touchpoints. The new visual identity positioned CryptoLand in the minds of audiences not as an experimental project, but as a credible, serious brand in the digital assets space.",
      imageSrc: "/images/Oystra-Residences-10.webp",
    },
  ];

  return (
    <>
      <Clcover slides={slides} />
      <Richvid
        videoSrc="/videos/Cryptoland.general. video.V3.0.01.1404.04_2.webm"
        title="CryptoLand - The Future of Digital Assets"
        description="Discover how CryptoLand is revolutionizing the digital asset space with innovative technology, transparent processes, and secure investment opportunities."
        poster="/images/MTGCRYPTOLAND..SITEBANNERS.V1.01.00.1404.06-02.webp"
        autoplay={false}
        muted={true}
        loop={false}
        controls={true}
        titleColor="#001952"
      />
    </>
  );
}
