import Reveal from "@/components/Reveal";
import { applications } from "@/lib/data/porcelain-tiles";

export default function SuitableSpaces() {
  return (
    <section id="our-products" className="pt-spaces-section">
      <div className="container">
        <Reveal>
          <h2 className="pt-section-title">SUITABLE FOR EVERY SPACE</h2>
          <div className="pt-spaces-card">
            {applications.map((app) => {
              const IconComp = app.icon;
              return (
                <div
                  key={app.id}
                  className={`pt-space-item ${app.isOutdoor ? "pt-space-outdoor" : ""}`}
                >
                  <div className="pt-space-icon-wrapper">
                    <IconComp strokeWidth={1.5} size={32} />
                  </div>
                  <span className="pt-space-label">
                    {app.label}
                    {app.isOutdoor && (
                      <>
                        <br />
                        <span className="pt-space-sublabel">(R11 Anti-Slip)</span>
                      </>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
