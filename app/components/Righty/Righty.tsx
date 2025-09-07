import Image from "next/image";
import "./Righty.scss";

interface RightyProps {
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

const Righty: React.FC<RightyProps> = ({
  src,
  alt,
  title,
  subtitle,
  description,
  button,
  priority = false,
}) => {
  return (
    <section className="righty">
      <div
        className="righty-background"
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        {priority && (
          <Image src={src} alt={alt} className="righty-image" fill priority />
        )}
      </div>

      <div className="righty-overlay">
        <div className="righty-content">
          <h1 className="righty-title">{title}</h1>
          {subtitle && <h2 className="righty-subtitle">{subtitle}</h2>}
          {description && <p className="righty-description">{description}</p>}
          {button && (
            <a href={button.href} className="righty-button">
              {button.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Righty;
