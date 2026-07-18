import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const whatsappUrl =
  "https://wa.me/447860215454?text=Hello%20Bayshield%20International%20UK%2C%20I%27d%20like%20a%20quote%20for%20outdoor%20porcelain%20pavers.";

const benefits = [
  { icon: "diamond" as const, title: "Premium Quality", text: "Full-body porcelain surfaces" },
  { icon: "shield" as const, title: "Durable & Long Lasting", text: "Built to perform in UK weather" },
  { icon: "truck" as const, title: "Delivered Across UK", text: "Fast, reliable and secure delivery" },
  { icon: "tag" as const, title: "Competitive Prices", text: "Excellent trade and project value" }
];

const categories = [
  { name: "Floor Tiles", image: "/images/category-floor.jpg" },
  { name: "Wall Tiles", image: "/images/category-wall.jpg" },
  { name: "Porcelain Slabs", image: "/images/category-slabs.jpg" },
  { name: "Outdoor Tiles", image: "/images/category-outdoor.jpg" },
  { name: "Bathroom Tiles", image: "/images/category-bathroom.jpg" },
  { name: "Large Format Slabs", image: "/images/category-large.jpg" }
];

const audiences = [
  { icon: "tools" as const, label: "Builders & Contractors" },
  { icon: "grid" as const, label: "Tilers & Installers" },
  { icon: "building" as const, label: "Developers & Architects" },
  { icon: "home" as const, label: "Kitchen & Bathroom Specialists" },
  { icon: "home" as const, label: "Homeowners" },
  { icon: "building" as const, label: "Commercial Projects" }
];

export default function HomePage() {
  return (
    <>
      <section className="hero home-hero">
        <div className="hero-visual" aria-hidden="true">
          <Image src="/images/hero-home.jpg" alt="Premium porcelain slabs in a modern interior" fill priority sizes="100vw" />
        </div>
        <div className="hero-wash" />
        <div className="container hero-inner">
          <Reveal className="hero-copy">
            <span className="eyebrow">Bayshield International UK</span>
            <h1>Premium <em>Outdoor Porcelain</em> Pavers</h1>
            <div className="hero-rule" />
            <h2>Designed for beautiful outdoor living.</h2>
            <p>Upgrade patios, gardens, pathways, terraces and driveways with premium 20mm porcelain pavers engineered for the UK climate.</p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary button-large">Get a Quote <Icon name="arrow" size={19}/></Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-outline button-large"><Icon name="whatsapp" size={20}/> Chat on WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="benefit-strip">
        <div className="container benefit-grid">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80} className="benefit-item">
              <Icon name={benefit.icon} size={43}/>
              <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section product-overview">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Our Products</span>
            <div className="section-title"><span/><h2>Tiles &amp; Pavers in a Range of Sizes</h2><span/></div>
          </Reveal>

          <div className="overview-grid">
            <Reveal className="overview-panel">
              <div className="panel-label navy">Porcelain Tiles</div>
              <div className="dimension-grid five">
                {["300 × 300 mm", "600 × 600 mm", "600 × 1200 mm", "800 × 800 mm", "1000 × 1000 mm"].map((size) => <div key={size}>{size}</div>)}
              </div>
              <div className="feature-mini-grid">
                <div><Icon name="water" size={37}/><strong>Water Resistant</strong></div>
                <div><Icon name="diamond" size={37}/><strong>High Durability</strong></div>
                <div><Icon name="sparkle" size={37}/><strong>Elegant Finish</strong></div>
              </div>
            </Reveal>

            <Reveal className="overview-panel outdoor-panel" delay={120}>
              <div className="panel-label green">Outdoor Porcelain Pavers</div>
              <div className="thickness-grid">
                <div><strong>6 mm</strong><small>Indoor surfaces</small></div>
                <div><strong>12 mm</strong><small>Heavy-duty interiors</small></div>
                <div className="highlight"><strong>20 mm</strong><small>Outdoor paving</small></div>
              </div>
              <div className="r11-card">
                <div><span>R11 Patio Tile</span><strong>Anti-Slip Porcelain</strong></div>
                <div className="sample-strip" />
                <div><small>Popular size</small><strong>600 × 900 mm</strong></div>
                <Icon name="shield" size={42}/>
              </div>
            </Reveal>
          </div>

          <Reveal className="category-wrap">
            <h3 className="category-title">Shop by Category</h3>
            <div className="category-grid">
              {categories.map((category, index) => (
                <Link href="/tiles" className="category-card" key={category.name} style={{ animationDelay: `${index * 60}ms` }}>
                  <div className="category-image"><Image src={category.image} alt={category.name} fill sizes="(max-width: 700px) 50vw, 16vw" /></div>
                  <span><Icon name="grid" size={18}/>{category.name}</span>
                </Link>
              ))}
            </div>
            <Link href="/tiles" className="button button-primary centered-button">View All Products <Icon name="arrow" size={18}/></Link>
          </Reveal>
        </div>
      </section>

      <section className="section serve-section">
        <div className="container serve-grid">
          <Reveal className="serve-copy">
            <span className="eyebrow">Who We Serve</span>
            <div className="section-title left"><span/><h2>We Supply &amp; Support</h2><span/></div>
            <div className="audience-grid">
              {audiences.map((audience) => (
                <div className="audience-card" key={audience.label}><Icon name={audience.icon} size={38}/><strong>{audience.label}</strong></div>
              ))}
            </div>
          </Reveal>
          <Reveal className="delivery-card" delay={120}>
            <Image src="/images/delivery-map.jpg" alt="Delivered across the UK" fill sizes="300px" />
          </Reveal>
        </div>
      </section>

      <section className="about-split">
        <Reveal className="about-intro">
          <span className="eyebrow">About Us</span>
          <h2>The Trusted Choice for Outdoor Porcelain</h2>
          <p>Bayshield International UK supplies premium porcelain pavers for residential, landscape and commercial projects across the UK. Our collections combine refined design, reliable grip and long-lasting performance.</p>
          <Link href="/about" className="text-link">Discover Bayshield <Icon name="arrow" size={18}/></Link>
        </Reveal>
        <Reveal className="why-panel" delay={100}>
          <span className="eyebrow">Why Choose Us</span>
          <div className="why-grid">
            <div><Icon name="grid" size={36}/><h3>Modern Designs</h3><p>Natural stone effects and contemporary outdoor finishes.</p></div>
            <div><Icon name="shield" size={36}/><h3>R11 Anti-Slip</h3><p>Excellent grip and safer outdoor living in wet conditions.</p></div>
            <div><Icon name="tag" size={36}/><h3>Project Value</h3><p>Competitive supply for homeowners, trade and developers.</p></div>
            <div><Icon name="truck" size={36}/><h3>UK Delivery</h3><p>Safe, secure and convenient nationwide delivery.</p></div>
          </div>
        </Reveal>
      </section>

      <section className="help-strip">
        <div className="container help-inner">
          <div className="help-copy"><Icon name="tools" size={45}/><div><span>Need help choosing the right surface?</span><strong>Our team will help you find the perfect solution for your project.</strong></div></div>
          <div className="help-actions"><Link href="/contact" className="button button-primary">Get a Quote <Icon name="arrow" size={18}/></Link><a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-outline"><Icon name="whatsapp" size={18}/> Chat on WhatsApp</a></div>
        </div>
      </section>
    </>
  );
}
