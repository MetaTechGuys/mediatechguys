import Image from "next/image";
import "./Lefty.scss";

interface LeftyProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  description?: string;
  button?: {
    text: string;
    href: string;
  };
  priority?: boolean;
}

const Lefty: React.FC<LeftyProps> = ({
  src,
  alt,
  title,
  subtitle,
  description,
  button,
  priority = false,
}) => {
  return (
    <section className="lefty">
      <div
        className="lefty-background"
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        {priority && (
          <Image src={src} alt={alt} className="lefty-image" fill priority />
        )}
      </div>

      <div className="lefty-overlay">
        <div className="lefty-content">
          <h1 className="lefty-title">{title}</h1>
          {subtitle && <h2 className="lefty-subtitle">{subtitle}</h2>}
          {description && <p className="lefty-description">{description}</p>}
          {button && (
            <a href={button.href} className="lefty-button">
              {button.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Lefty;
