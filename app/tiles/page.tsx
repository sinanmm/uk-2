import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import ProductExplorer from "@/components/ProductExplorer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Porcelain Tiles",
  description: "Explore Bayshield International UK's premium porcelain tile and outdoor paver collection."
};

export default function TilesPage() {
  return (
    <>
      <section className="subhero tiles-hero">
        <Image src="/images/hero-tiles.jpg" alt="Light porcelain patio tiles in a modern outdoor living space" fill priority sizes="100vw" />
        <div className="subhero-overlay" />
        <div className="container subhero-inner">
          <Reveal>
            <span className="eyebrow">Premium Collection</span>
            <h1>Porcelain Tiles</h1>
            <p>Premium quality porcelain tiles and outdoor pavers in a variety of colours, finishes and sizes.</p>
          </Reveal>
        </div>
      </section>

      <ProductExplorer />

      <section className="section product-values">
        <div className="container values-grid">
          <Reveal className="value-card"><Icon name="shield" size={41}/><div><h3>Premium Quality</h3><p>Dense, full-body porcelain surfaces.</p></div></Reveal>
          <Reveal className="value-card" delay={70}><Icon name="grid" size={41}/><div><h3>Multiple Sizes</h3><p>Flexible formats for every project.</p></div></Reveal>
          <Reveal className="value-card" delay={140}><Icon name="sparkle" size={41}/><div><h3>Wide Range</h3><p>Colours and finishes to suit every space.</p></div></Reveal>
          <Reveal className="value-card" delay={210}><Icon name="truck" size={41}/><div><h3>Fast Delivery</h3><p>Nationwide delivery across the UK.</p></div></Reveal>
        </div>
      </section>

      <section className="need-help-card">
        <div className="container">
          <Reveal className="need-help-inner">
            <h2>Need Help Choosing?</h2>
            <p>Our team is here to help you find the perfect tiles for your project.</p>
            <a className="button button-primary" href="https://wa.me/447860215454?text=Hello%20Bayshield%2C%20I%20need%20help%20choosing%20porcelain%20tiles." target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19}/> Chat on WhatsApp</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
