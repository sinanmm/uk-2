import { ShieldCheck, Droplets, Snowflake, Sparkles, BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function BottomBenefits() {
  return (
    <section className="pt-bottom-benefits">
      <div className="container">
        <Reveal>
          <div className="pt-bottom-grid">
            <div className="pt-bottom-item">
              <ShieldCheck size={28} className="pt-bottom-icon" strokeWidth={1.5} />
              <span>Premium Quality<br/>Surfaces</span>
            </div>
            <div className="pt-bottom-item">
              <Droplets size={28} className="pt-bottom-icon" strokeWidth={1.5} />
              <span>Water Resistant<br/>& Hygienic</span>
            </div>
            <div className="pt-bottom-item">
              <Snowflake size={28} className="pt-bottom-icon" strokeWidth={1.5} />
              <span>Frost Resistant<br/>& Durable</span>
            </div>
            <div className="pt-bottom-item">
              <Sparkles size={28} className="pt-bottom-icon" strokeWidth={1.5} />
              <span>Easy to Clean<br/>& Maintain</span>
            </div>
            <div className="pt-bottom-item">
              <BadgeCheck size={28} className="pt-bottom-icon" strokeWidth={1.5} />
              <span>R11 Anti-Slip<br/>Outdoor Safe</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
