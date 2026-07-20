import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Pure Surface Solutions's premium outdoor porcelain paving solutions."
};

const advantages = [
  ["shield", "R11 Anti-Slip Surface", "Excellent grip for safer outdoor living, including wet UK conditions."],
  ["diamond", "Full Porcelain Body", "Strong, dense and durable material designed for long-term performance."],
  ["water", "Frost & Weather Resistant", "Engineered to perform through changing seasons and temperature cycles."],
  ["sparkle", "Stain & Fade Resistant", "Maintains a clean, premium appearance with straightforward care."],
  ["tools", "Low Maintenance", "Easy to clean and ideal for busy homes and commercial environments."],
  ["grid", "Modern Stone Effects", "Contemporary designs inspired by natural stone and architectural surfaces."]
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-page-hero">
        <div className="container page-hero-inner">
          <Reveal>
            <span className="eyebrow">Pure Surface Solutions</span>
            <h1>Outdoor Porcelain Solutions Built to Last</h1>
            <p>Premium 20mm pavers for beautiful patios, gardens, pathways, terraces and driveways.</p>
          </Reveal>
        </div>
      </section>

      <section className="section about-story">
        <div className="container story-grid">
          <Reveal className="story-image">
            <Image src="/images/category-outdoor.jpg" alt="Premium outdoor porcelain patio" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <div className="story-badge"><strong>20mm</strong><span>Outdoor Porcelain Pavers</span></div>
          </Reveal>
          <Reveal className="story-copy" delay={100}>
            <span className="eyebrow">Upgrade Your Outdoor Spaces</span>
            <h2>Beautiful surfaces. Reliable performance.</h2>
            <p>Create stunning patios, gardens, pathways, terraces and driveways with our premium 20mm outdoor porcelain pavers.</p>
            <p>Our outdoor tiles feature an R11 anti-slip surface rating, providing excellent grip and safety in wet conditions, making them ideal for the UK’s climate. Manufactured with a full porcelain body, they offer outstanding strength, durability and long-lasting beauty.</p>
            <div className="story-stat-row">
              <div><strong>R11</strong><span>Anti-slip rating</span></div>
              <div><strong>20mm</strong><span>Outdoor thickness</span></div>
              <div><strong>UK</strong><span>Nationwide delivery</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section advantage-section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Why Pure Surface Solutions</span>
            <div className="section-title"><span/><h2>Premium Outdoor Performance</h2><span/></div>
          </Reveal>
          <div className="advantage-grid">
            {advantages.map(([icon, title, text], index) => (
              <Reveal className="advantage-card" delay={index * 70} key={title}>
                <div className="advantage-icon"><Icon name={icon} size={31}/></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section audience-band">
        <div className="container audience-band-grid">
          <Reveal>
            <span className="eyebrow">For Every Scale of Project</span>
            <h2>From a few square metres to a full development supply.</h2>
            <p>Whether you need a complete project supply or just a few square metres, our team is happy to arrange delivery directly to your doorstep.</p>
            <Link href="/contact" className="button button-primary button-large">Request a Quote <Icon name="arrow" size={19}/></Link>
          </Reveal>
          <Reveal className="audience-list" delay={100}>
            {["Homeowners", "Landscapers", "Builders", "Developers", "Architects", "Commercial Projects"].map((item) => <div key={item}><Icon name="check" size={18}/>{item}</div>)}
          </Reveal>
        </div>
      </section>

      <section className="section about-contact-band">
        <div className="container contact-band-inner">
          <Reveal>
            <span className="eyebrow">Nationwide Delivery Available</span>
            <h2>Premium outdoor porcelain delivered across the UK.</h2>
            <p>Pure Surface Solutions – premium outdoor porcelain solutions built to last.</p>
          </Reveal>
          <div className="contact-band-details">
            <a href="tel:00447407048979"><Icon name="phone"/>0044-7407048979</a>
            <a href="tel:+441212493778"><Icon name="phone"/>0121 249 3778</a>
            <a href="mailto:info@puresurface.co.uk"><Icon name="mail"/>info@puresurface.co.uk</a>
            <a href="https://bayshieldinternational.com"><Icon name="map"/>bayshieldinternational.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
