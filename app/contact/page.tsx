import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Pure Surface Solutions for outdoor porcelain paver pricing, samples and nationwide delivery."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-page-hero">
        <div className="container page-hero-inner">
          <Reveal>
            <span className="eyebrow">Contact Pure Surface Solutions</span>
            <h1>Let’s Plan Your Outdoor Project</h1>
            <p>Tell us what you need and our team will help with products, quantities, pricing and delivery.</p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">
          <Reveal className="contact-details">
            <span className="eyebrow">Speak With Our Team</span>
            <h2>Professional support from first enquiry to delivery.</h2>
            <p>Contact us for outdoor porcelain recommendations, availability, quotations and nationwide UK delivery.</p>

            <div className="contact-card-list">
              <a href="tel:07407048979" className="contact-card"><span><Icon name="phone"/></span><div><small>Phone / WhatsApp</small><strong>07407048979</strong></div><Icon name="chevron" size={20}/></a>
              <a href="mailto:info@puresurface.co.uk" className="contact-card"><span><Icon name="mail"/></span><div><small>Email</small><strong>info@puresurface.co.uk</strong></div><Icon name="chevron" size={20}/></a>
            </div>

            <a className="button button-whatsapp button-large" href="https://wa.me/447407048979?text=Hello%20Pure%20Surface%20Solutions%2C%20I%27d%20like%20to%20discuss%20an%20outdoor%20porcelain%20project." target="_blank" rel="noreferrer"><Icon name="whatsapp" size={21}/> Start WhatsApp Chat</a>
          </Reveal>

          <Reveal className="form-panel" delay={100}>
            <div className="form-panel-heading"><span className="eyebrow">Request a Quote</span><h2>Send Your Enquiry</h2><p>Share your project details and we’ll help you choose the right porcelain surface.</p></div>
            <ContactForm />
          </Reveal>
        </div>
      </section>

    </>
  );
}
