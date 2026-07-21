import Image from "next/image";
import { CheckCircle2, Leaf } from "lucide-react";
import Reveal from "@/components/Reveal";
import { antiSlipApplications, antiSlipSizes } from "@/lib/data/porcelain-tiles";

export default function AntiSlipSection() {
  return (
    <section className="pt-antislip-section">
      <div className="container">
        <Reveal>
          <div className="pt-antislip-card">
            <div className="pt-antislip-left">
              <h2 className="pt-antislip-title">
                R11 ANTI-SLIP TILES <Leaf className="pt-leaf-icon" size={24} />
              </h2>
              <h3 className="pt-antislip-subtitle">Safe. Strong. Stylish.</h3>
              <p className="pt-antislip-desc">
                Our R11 anti-slip porcelain tiles are specially designed for
                outdoor and wet areas where extra grip and durability are
                essential. Perfect combination of safety and style.
              </p>
              <ul className="pt-antislip-bullets">
                <li><CheckCircle2 size={18} className="pt-check-icon"/> High slip resistance (R11 Rating)</li>
                <li><CheckCircle2 size={18} className="pt-check-icon"/> Ideal for outdoor & wet areas</li>
                <li><CheckCircle2 size={18} className="pt-check-icon"/> Durable & weather resistant</li>
                <li><CheckCircle2 size={18} className="pt-check-icon"/> Easy to clean & maintain</li>
              </ul>
            </div>
            
            <div className="pt-antislip-right">
              <div className="pt-antislip-apps">
                {antiSlipApplications.map(app => (
                  <div key={app.id} className="pt-app-card">
                    <div className="pt-app-img">
                      <Image 
                        src={app.img} 
                        alt={`${app.label} with R11 anti-slip porcelain tiles`}
                        fill
                        sizes="(max-width: 768px) 50vw, 20vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <span className="pt-app-label">{app.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-antislip-meta">
                <div className="pt-meta-sizes">
                  <h4 className="pt-meta-title">AVAILABLE SIZES</h4>
                  <div className="pt-meta-sizes-grid">
                    {antiSlipSizes.map((sz, i) => (
                      <div key={i} className="pt-meta-sz">
                        {sz.w} &times; {sz.h} <small>mm</small>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-meta-divider"></div>
                
                <div className="pt-meta-finishes">
                  <h4 className="pt-meta-title">AVAILABLE FINISHES</h4>
                  <div className="pt-meta-finishes-grid">
                    <div className="pt-meta-fin">
                      <div className="pt-fin-img"><Image src="/images/porcelain-tiles/finishes/anti-slip-r11.png" alt="Anti-slip finish" fill sizes="40px" style={{objectFit: 'cover'}}/></div>
                      <span>Anti-Slip<br/>(R11)</span>
                    </div>
                    <div className="pt-meta-fin">
                      <div className="pt-fin-img"><Image src="/images/porcelain-tiles/finishes/stone-finish.png" alt="Stone finish" fill sizes="40px" style={{objectFit: 'cover'}}/></div>
                      <span>Stone Finish<br/>(R11)</span>
                    </div>
                    <div className="pt-meta-fin">
                      <div className="pt-fin-img"><Image src="/images/porcelain-tiles/finishes/matt.png" alt="Matt finish" fill sizes="40px" style={{objectFit: 'cover'}}/></div>
                      <span>Matt<br/>(R11)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
