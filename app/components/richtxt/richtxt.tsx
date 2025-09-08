"use client";

import "./richtxt.scss";

interface ColumnItem {
  subtitle: string;
  text: string;
}

interface RichtxtProps {
  title: string;
  leftColumn: ColumnItem[];
  rightColumn: ColumnItem[];
}

const Richtxt: React.FC<RichtxtProps> = ({
  title,
  leftColumn,
  rightColumn,
}) => {
  return (
    <section className="richtxt">
      <div className="richtxt-container">
        <h2 className="richtxt-title">{title}</h2>
        <div className="richtxt-content">
          <div className="richtxt-column richtxt-left">
            {leftColumn.map((item, index) => (
              <div key={index} className="richtxt-item">
                <h3 className="richtxt-subtitle">{item.subtitle}</h3>
                <p className="richtxt-text">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="richtxt-column richtxt-right">
            {rightColumn.map((item, index) => (
              <div key={index} className="richtxt-item">
                <h3 className="richtxt-subtitle">{item.subtitle}</h3>
                <p className="richtxt-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Richtxt;
