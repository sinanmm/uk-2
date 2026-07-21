import { CheckCircle2, MessageCircle, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ContactCTA() {
  const whatsappNumber = "447407048979";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Pure%20Surface%20Solutions%2C%20I%27d%20like%20more%20information%20about%20your%20porcelain%20tiles.`;
  const emailUrl = "mailto:info@puresurface.co.uk";

  return (
    <section className="pt-cta-section" id="contact">
      <div className="container">
        <Reveal>
          <div className="pt-cta-card">
            <div className="pt-cta-left">
              <h2>NEED HELP CHOOSING THE RIGHT TILE?</h2>
              <p>
                Our surface experts are here to help you find the perfect match
                for your project.
              </p>
            </div>
            
            <div className="pt-cta-middle">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="pt-btn pt-btn-whatsapp">
                <MessageCircle size={20} />
                WHATSAPP US
              </a>
              <a href={emailUrl} className="pt-btn pt-btn-email">
                <Mail size={20} />
                EMAIL US
              </a>
            </div>
            
            <div className="pt-cta-divider"></div>
            
            <div className="pt-cta-right">
              <ul>
                <li><CheckCircle2 size={18} className="pt-check-icon"/> Expert advice for your project</li>
                <li><CheckCircle2 size={18} className="pt-check-icon"/> Samples available on request</li>
                <li><CheckCircle2 size={18} className="pt-check-icon"/> Fast response within 24 hours</li>
                <li><CheckCircle2 size={18} className="pt-check-icon"/> Nationwide delivery across the UK</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
