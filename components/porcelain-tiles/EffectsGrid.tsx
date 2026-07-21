import Image from "next/image";
import Reveal from "@/components/Reveal";
import { tileEffects } from "@/lib/data/porcelain-tiles";

export default function EffectsGrid() {
  return (
    <section className="pt-effects-section">
      <div className="container">
        <Reveal>
          <div className="pt-effects-card">
            <h2 className="pt-spec-title">EFFECTS / STYLES AVAILABLE</h2>
            <div className="pt-effects-grid">
              {tileEffects.map((eff) => (
                <div key={eff.id} className={`pt-effect-item ${eff.isMore ? 'pt-effect-more' : ''}`}>
                  {eff.isMore ? (
                    <div className="pt-effect-more-content">
                      <span>{eff.label.split('\\n').map((l,i) => <span key={i}>{l}<br/></span>)}</span>
                    </div>
                  ) : (
                    <>
                      <div className="pt-effect-img">
                        {eff.img && (
                          <Image 
                            src={eff.img} 
                            alt={`${eff.label} porcelain tile`}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                            style={{ objectFit: 'cover' }}
                            loading="lazy"
                          />
                        )}
                      </div>
                      <span className="pt-effect-label">{eff.label}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
