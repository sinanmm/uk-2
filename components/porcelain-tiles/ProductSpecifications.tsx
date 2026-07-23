import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  porcelainColours,
  tileSizes,
  tileFinishes,
} from "@/lib/data/porcelain-tiles";

export default function ProductSpecifications() {
  return (
    <section className="pt-specs-section">
      <div className="container">
        <Reveal>
          <div className="pt-specs-grid">
            {/* Colours Available */}
            <div className="pt-spec-card pt-colours-card">
              <h3 className="pt-spec-title">COLOURS AVAILABLE</h3>
              <div className="pt-colours-grid">
                {porcelainColours.map((col) => (
                  <div key={col.id} className="pt-colour-item">
                    <div
                      className={`pt-colour-swatch ${
                        col.isMulticolour ? "pt-swatch-multi" : ""
                      }`}
                      style={col.hex ? { backgroundColor: col.hex } : undefined}
                    ></div>
                    <span className="pt-colour-label">{col.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes Available */}
            <div className="pt-spec-card pt-sizes-card">
              <h3 className="pt-spec-title">SIZES AVAILABLE (MM)</h3>
              <div className="pt-sizes-grid">
                {tileSizes.map((sz, idx) => (
                  <div key={idx} className="pt-size-item">
                    <div
                      className="pt-size-diagram"
                      style={{
                        aspectRatio: `${sz.w} / ${sz.h}`,
                        width: sz.landscape ? "60px" : sz.w === sz.h ? "45px" : "35px",
                      }}
                    ></div>
                    <span className="pt-size-label">
                      {sz.w} &times; {sz.h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Finishes Available */}
            <div className="pt-spec-card pt-finishes-card">
              <h3 className="pt-spec-title">FINISHES AVAILABLE</h3>
              <div className="pt-finishes-grid">
                {tileFinishes.map((f) => (
                  <div key={f.id} className="pt-finish-item">
                    <div className="pt-finish-img-wrapper">
                      <Image
                        src={f.img}
                        alt={`${f.label} porcelain tile surface`}
                        fill
                        sizes="60px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <span className="pt-finish-label">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Thickness Available */}
            <div className="pt-spec-card pt-thickness-card">
              <h3 className="pt-spec-title">THICKNESS AVAILABLE</h3>
              <div className="pt-thickness-visual">
                <div className="pt-stack-illustration">
                  <div className="pt-stack-layer" style={{ transform: "translateY(0)" }}></div>
                </div>
              </div>
              <ul className="pt-thickness-list">
                <li>8.5mm</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
