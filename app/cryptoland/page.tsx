import Clcover, { ClcoverSlide } from "../components/Clcover/Clcover";

export default function CryptolandPage() {
  const slides: ClcoverSlide[] = [
    {
      title: "Security First",
      subtitle: "Protecting your assets",
      description: "Robust cryptographic safeguards and multi-layer security.",
      imageSrc: "/images/MTGCRYPTOLAND..SITEBANNERS.V1.01.00.1404.06-02.webp",
    },
    {
      title: "Transparency",
      subtitle: "Open and auditable",
      description: "Clear processes and verifiable on-chain data.",
      imageSrc: "/images/MTGCRYPTOLAND..SITEBANNERS.V1.01.00.1404.06-01.webp",
    },
  ];

  return <Clcover slides={slides} />;
}
