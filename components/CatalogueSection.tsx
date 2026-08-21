import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { catalogues } from "@/lib/data/catalogues";

interface CatalogueSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showHeroBanner?: boolean;
}

export default function CatalogueSection({
  title = "PRODUCT CATALOGUES & SPECIFICATIONS",
  subtitle = "Download our official product catalogues and technical specification guides for offline reference and client presentations.",
  className = "",
  showHeroBanner = false
}: CatalogueSectionProps) {
  return (
    <section className={`catalogue-section ${className}`}>
      <div className="container">
        {showHeroBanner && (
          <div className="catalogue-hero-banner">
            <div className="catalogue-hero-content">
              <span className="eyebrow gold">OFFICIAL DOWNLOAD CENTER</span>
              <h1>Pure Surface Digital Catalogues</h1>
              <p>Explore our complete architectural porcelain slab and tile collections. Download high-resolution brochures, technical specification sheets, and design swatches directly to your device.</p>
              <div className="catalogue-hero-badges">
                <span className="hero-badge-item"><Icon name="check" size={16} /> Instant PDF Downloads</span>
                <span className="hero-badge-item"><Icon name="check" size={16} /> Complete Technical Specs</span>
                <span className="hero-badge-item"><Icon name="check" size={16} /> Free Architectural Resources</span>
              </div>
            </div>
          </div>
        )}

        <div className="section-header text-center">
          <span className="eyebrow">DIGITAL BROCHURES</span>
          <h2>{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="catalogue-grid">
          {catalogues.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 100} className="catalogue-card">
              <div className="catalogue-card-cover">
                <div className="catalogue-cover-wrapper">
                  <Image
                    src={cat.coverImage}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="catalogue-badge-pill">{cat.badge}</div>
                  <div className="catalogue-size-pill">
                    <Icon name="document" size={14} /> PDF • {cat.fileSize}
                  </div>
                </div>
              </div>

              <div className="catalogue-card-body">
                <div className="catalogue-card-header">
                  <h3 className="catalogue-card-title">{cat.title}</h3>
                  <p className="catalogue-card-subtitle">{cat.subtitle}</p>
                </div>

                <p className="catalogue-card-desc">{cat.description}</p>

                <div className="catalogue-card-tags">
                  {cat.categories.map((catTag) => (
                    <span key={catTag} className="catalogue-tag-pill">
                      {catTag}
                    </span>
                  ))}
                </div>

                <ul className="catalogue-card-highlights">
                  {cat.highlights.map((h, i) => (
                    <li key={i}>
                      <Icon name="check" size={16} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="catalogue-card-actions">
                  <a
                    href={cat.pdfPath}
                    download={`${cat.title}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-primary catalogue-btn-download"
                    title={`Download ${cat.title} (${cat.fileSize})`}
                  >
                    <Icon name="download" size={18} />
                    Download PDF ({cat.fileSize})
                  </a>
                  <a
                    href={cat.pdfPath}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-outline catalogue-btn-view"
                    title={`View ${cat.title} online`}
                  >
                    <Icon name="eye" size={18} />
                    View Online
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
