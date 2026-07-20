import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const whatsappUrl =
  "https://wa.me/447407048979?text=Hello%20Pure%20Surface%20Solutions%2C%20I%27d%20like%20a%20quote%20for%20outdoor%20porcelain%20pavers.";

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
            <h1>Premium <em>Porcelain Tiles</em> & Slabs</h1>
            <div className="hero-rule" />
            <h2>Supplying for Residential & Commercial Projects across the UK</h2>
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

      <section className="product-overview-new">
        <div className="container">
          <div className="product-header reveal is-visible">
            <span className="eyebrow">OUR PRODUCTS</span>
            <h2>TILES &amp; SLABS IN A RANGE OF SIZES</h2>
            <p>Premium surfaces. Timeless spaces. Designed for every project.</p>
          </div>

          <div className="product-cards-wrap reveal is-visible">
            <div className="product-card-split">
              <div className="product-badge navy">
                <Icon name="grid" size={18} /> PORCELAIN TILES
              </div>
              
              <div className="product-card-inner">
                <div className="product-subhead">
                  <span/> AVAILABLE SIZES
                </div>
                
                <div className="tile-size-grid">
                  <div className="tile-size-box">
                    <div className="shape-rect-tall"></div>
                    <span>600 x 300 mm</span>
                  </div>
                  <div className="tile-size-box">
                    <div className="shape-square"></div>
                    <span>600 x 600 mm</span>
                  </div>
                  <div className="tile-size-box">
                    <div className="shape-rect-tall-large"></div>
                    <span>600 x 900 mm</span>
                  </div>
                  <div className="tile-size-box">
                    <div className="shape-rect-wide"></div>
                    <span>1200 x 600 mm</span>
                  </div>
                </div>

                <div className="anti-slip-banner">
                  <div className="anti-slip-icon">
                    <Icon name="shield" size={42} />
                    <span>R11</span>
                  </div>
                  <div className="anti-slip-text">
                    <strong>R11 ANTI-SLIP TILES</strong>
                    <p>Safe, slip-resistant surfaces perfect for outdoor and wet areas.</p>
                  </div>
                  <div className="anti-slip-bg"></div>
                </div>
                
                <Link href="/tiles" className="button-full navy">
                  EXPLORE PORCELAIN TILES RANGE &rarr;
                </Link>
              </div>
            </div>

            <div className="product-card-split">
              <div className="product-badge green">
                <Icon name="layer" size={18} /> PORCELAIN SLABS
              </div>
              
              <div className="product-card-inner">
                <div className="product-subhead">
                  <span/> AVAILABLE SIZES &amp; THICKNESSES
                </div>
                
                <div className="slab-size-grid">
                  <div className="slab-size-box">
                    <strong className="green-text">6 mm</strong>
                    <small>(3.12 SQM)</small>
                    <div className="shape-iso-slab"></div>
                    <span>2600 x 1200 mm</span>
                  </div>
                  <div className="slab-size-box">
                    <strong className="green-text">12 mm</strong>
                    <small>(5.12 SQM)</small>
                    <div className="shape-iso-slab thick-12"></div>
                    <span>3200 x 1600 mm</span>
                  </div>
                  <div className="slab-size-box highlight">
                    <strong className="green-text">20 mm</strong>
                    <small>(5.12 SQM)</small>
                    <div className="shape-iso-slab thick-20"></div>
                    <span>3200 x 1600 mm</span>
                  </div>
                </div>
                
                <Link href="/slabs" className="button-full green">
                  EXPLORE PORCELAIN SLABS RANGE &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-strip-bar">
          <div className="container contact-strip-grid">
            <div className="contact-strip-item">
              <div className="icon-wrap solid-green"><Icon name="whatsapp" size={24}/></div>
              <div>
                <strong>WHATSAPP US</strong>
                <small>Chat with our team instantly</small>
              </div>
            </div>
            <div className="contact-strip-item">
              <div className="icon-wrap outline-green"><Icon name="mail" size={24}/></div>
              <div>
                <strong>EMAIL US</strong>
                <small>Send us your requirements</small>
              </div>
            </div>
            <div className="contact-strip-item">
              <div className="icon-wrap outline-green"><Icon name="document" size={24}/></div>
              <div>
                <strong>REQUEST A QUOTE</strong>
                <small>Get a personalised quote today</small>
              </div>
            </div>
            <div className="contact-strip-item">
              <div className="icon-wrap outline-green"><Icon name="headset" size={24}/></div>
              <div>
                <strong>EXPERT SUPPORT</strong>
                <small>Our surface experts are here to help you choose right</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section serve-section">
        <div className="container serve-grid">
          <Reveal className="serve-copy">
            <span className="eyebrow">Who We Serve</span>
            <div className="section-title">
              <span/><h2>We Supply &amp; Support</h2><span/>
            </div>
            <p>Premium porcelain tiles and slabs for every project.<br/>Trusted by professionals and homeowners <strong style={{color: '#5d9d2b'}}>across the UK.</strong></p>
            <div className="audience-grid">
              {audiences.map((audience) => (
                <div className="audience-card" key={audience.label}>
                  <Icon name={audience.icon} size={42}/>
                  <div className="audience-card-divider"></div>
                  <strong>{audience.label}</strong>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="delivery-card" delay={120}>
            <div className="delivery-card-header">
              <div className="delivery-icon-circle">
                <Icon name="truck" size={24} />
              </div>
              <div className="delivery-card-header-text">
                <small>Delivered</small>
                <strong>Across the UK</strong>
              </div>
            </div>
            <div className="delivery-map-area">
              <Image src="/images/delivery-map-highres.png" alt="Delivered across the UK" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="(max-width: 860px) 100vw, 350px" />
            </div>
            <div className="delivery-card-footer">
              <div className="delivery-check-circle">
                <Icon name="check" size={20} />
              </div>
              <div className="delivery-footer-text">
                <strong>Nationwide Delivery</strong>
                <small>Fast, safe &amp; reliable.</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-split">
        <Reveal className="about-intro">
          <span className="eyebrow">About Us</span>
          <h2>The Trusted Choice for Outdoor Porcelain</h2>
          <p>Pure Surface Solutions supplies premium porcelain pavers for residential, landscape and commercial projects across the UK. Our collections combine refined design, reliable grip and long-lasting performance.</p>
          <Link href="/about" className="text-link">Discover Pure Surface Solutions <Icon name="arrow" size={18}/></Link>
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
