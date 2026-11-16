import { designs } from "../../assets/design-exporter.js";
import "./design-styles.css";

export default function Designs() {
  return (
    <section className="design-container">
      {designs.map((design) => (
        <div key={design.src}>
          {design.type === "video" ? (
            <video
              src={design.src}
              aria-label={design.alt}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img src={design.src} alt={design.alt} loading="lazy" />
          )}
        </div>
      ))}
    </section>
  );
}
