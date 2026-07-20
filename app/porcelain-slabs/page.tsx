import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function PorcelainSlabsPage() {
  return (
    <div className="ps-page pt-page">
      {/* 1. Hero Section */}
      <section className="ps-hero">
        <div className="ps-hero-bg">
          <Image src="/images/hero-home.jpg" alt="Porcelain Slabs Kitchen" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
          <div className="ps-hero-overlay"></div>
        </div>
        <div className="container ps-hero-content">
          <Reveal>
            <div className="breadcrumbs">
              <Link href="/">Home</Link> &gt; <span>Porcelain Slabs</span>
            </div>
            <h1>PORCELAIN SLABS</h1>
            <h2>Big in size. Bold in beauty.</h2>
            <p>
              Crafted with precision and inspired by nature,
              our porcelain slabs bring a sense of space,
              elegance and seamless luxury to every project.
            </p>
          </Reveal>
          
          <Reveal className="ps-hero-features" delay={150}>
            <div className="ps-feature-item">
              <div className="ps-feat-icon"><Icon name="layer" size={32} /></div>
              <strong>LARGE FORMAT</strong>
            </div>
            <div className="ps-feature-item">
              <div className="ps-feat-icon"><Icon name="shield-cross" size={32} /></div>
              <strong>HIGH STRENGTH</strong>
            </div>
            <div className="ps-feature-item">
              <div className="ps-feat-icon"><Icon name="sparkle" size={32} /></div>
              <strong>EASY TO CLEAN</strong>
            </div>
            <div className="ps-feature-item">
              <div className="ps-feat-icon"><Icon name="leaf" size={32} /></div>
              <strong>SUSTAINABLE</strong>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Available Sizes & Thicknesses */}
      <section className="ps-sizes">
        <div className="container">
          <Reveal className="ps-sizes-header">
            <h3 className="ps-section-title">
              <span className="ps-line"></span>
              AVAILABLE SIZES &amp; THICKNESSES
              <span className="ps-line"></span>
            </h3>
            <p>Engineered for performance. Designed for impact.</p>
          </Reveal>
          
          <Reveal className="ps-sizes-grid" delay={100}>
            <div className="ps-size-card">
              <div className="ps-size-top">
                <strong className="ps-thick-green">6 mm</strong>
                <span>Thickness</span>
                <small>(3.12 SQM)</small>
              </div>
              <div className="ps-iso-slab-wrap">
                <div className="ps-iso-slab thick-6"></div>
              </div>
              <div className="ps-size-bottom">
                <strong>2600 x 1200 mm</strong>
              </div>
            </div>

            <div className="ps-size-card">
              <div className="ps-size-top">
                <strong className="ps-thick-green">12 mm</strong>
                <span>Thickness</span>
                <small>(5.12 SQM)</small>
              </div>
              <div className="ps-iso-slab-wrap">
                <div className="ps-iso-slab thick-12"></div>
              </div>
              <div className="ps-size-bottom">
                <strong>3200 x 1600 mm</strong>
              </div>
            </div>

            <div className="ps-size-card">
              <div className="ps-size-top">
                <strong className="ps-thick-green">20 mm</strong>
                <span>Thickness</span>
                <small>(5.12 SQM)</small>
              </div>
              <div className="ps-iso-slab-wrap">
                <div className="ps-iso-slab thick-20"></div>
              </div>
              <div className="ps-size-bottom">
                <strong>3200 x 1600 mm</strong>
              </div>
            </div>
          </Reveal>
          
          <div className="ps-sizes-info">
            <Icon name="search" size={16}/> <small>Other sizes available on request for special projects.</small>
          </div>
        </div>
      </section>

      {/* 3. Finishes & Colours */}
      <section className="ps-finishes-colours">
        <div className="container ps-fc-grid">
          <Reveal className="ps-fc-card">
            <h4>AVAILABLE FINISHES</h4>
            <div className="ps-finish-list">
              <div className="ps-finish-item">
                <div className="finish-swatch f-highgloss"></div>
                <span>Gloss</span>
              </div>
              <div className="ps-finish-item">
                <div className="finish-swatch f-matt"></div>
                <span>Matt</span>
              </div>
              <div className="ps-finish-item">
                <div className="finish-swatch f-silk"></div>
                <span>Silk</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="ps-fc-card" delay={100}>
            <h4>AVAILABLE COLOURS</h4>
            <div className="ps-colours-list">
              <div className="ps-colour-item"><div className="swatch" style={{backgroundColor: '#f9f9f9'}}></div><span>White</span></div>
              <div className="ps-colour-item"><div className="swatch" style={{backgroundColor: '#eee6d8'}}></div><span>Ivory</span></div>
              <div className="ps-colour-item"><div className="swatch" style={{backgroundColor: '#957159'}}></div><span>Brown</span></div>
              <div className="ps-colour-item"><div className="swatch" style={{backgroundColor: '#6b899e'}}></div><span>Blue</span></div>
              <div className="ps-colour-item"><div className="swatch" style={{backgroundColor: '#888888'}}></div><span>Grey</span></div>
              <div className="ps-colour-item"><div className="swatch" style={{backgroundColor: '#222'}}></div><span>Black</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Benefits Strip */}
      <section className="ps-benefits-strip">
        <div className="container">
          <Reveal className="ps-benefits-grid">
            <div className="ps-benefit-item">
              <Icon name="shield-cross" size={32}/>
              <span>ANTI-MICROBIAL<br/>HYGIENIC SURFACE</span>
            </div>
            <div className="ps-benefit-item">
              <Icon name="flame" size={32}/>
              <span>ULTRA-HIGH<br/>HEAT RESISTANCE</span>
            </div>
            <div className="ps-benefit-item">
              <Icon name="droplet" size={32}/>
              <span>SUPERIOR STAIN<br/>RESISTANCE</span>
            </div>
            <div className="ps-benefit-item">
              <Icon name="door-open" size={32}/>
              <span>EXTENSIVE<br/>POSSIBILITIES</span>
            </div>
            <div className="ps-benefit-item">
              <Icon name="sun" size={32}/>
              <span>RESISTS<br/>UV RAYS</span>
            </div>
            <div className="ps-benefit-item">
              <Icon name="spray" size={32}/>
              <span>LOW MAINTENANCE<br/>NEEDS</span>
            </div>
            <div className="ps-benefit-item">
              <Icon name="scatter" size={32}/>
              <span>STABLE &amp;<br/>NON-FADING<br/>COLOURS</span>
            </div>
            <div className="ps-benefit-item">
              <Icon name="water" size={32}/>
              <span>EASY TO<br/>CLEAN</span>
            </div>
            <div className="ps-benefit-item">
              <Icon name="calendar" size={32}/>
              <span>LASTS A<br/>LIFETIME</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="ps-bottom-cta">
        <div className="container">
          <Reveal className="ps-cta-panel">
            <div className="ps-cta-bg">
              <Image src="/images/hero-home.jpg" alt="Kitchen Slab" fill style={{ objectFit: 'cover' }} />
              <div className="ps-cta-overlay"></div>
            </div>
            
            <div className="ps-cta-content">
              <h3>NEED HELP CHOOSING THE RIGHT SLAB?</h3>
              <p>Our surface experts are here to help you find<br/>the perfect match for your project.</p>
              
              <div className="ps-cta-actions">
                <div className="ps-cta-action-item">
                  <div className="ps-cta-icon whatsapp-bg"><Icon name="whatsapp" size={24}/></div>
                  <div>
                    <strong>WHATSAPP US</strong>
                    <small>Chat with our team instantly</small>
                  </div>
                </div>
                <div className="ps-cta-action-item">
                  <div className="ps-cta-icon outline-green"><Icon name="document" size={24}/></div>
                  <div>
                    <strong>GET A QUOTE</strong>
                    <small>Get a personalised quote today</small>
                  </div>
                </div>
                <div className="ps-cta-action-item">
                  <div className="ps-cta-icon outline-green"><Icon name="headset" size={24}/></div>
                  <div>
                    <strong>EXPERT SUPPORT</strong>
                    <small>We&apos;re here to help you every step of the way</small>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Footer Strip */}
      <section className="pt-footer-strip">
        <div className="container">
          <div className="pt-fs-grid">
            <div className="pt-fs-item">
              <Icon name="diamond" size={24}/>
              <div>
                <strong>Premium Quality</strong>
                <small>Surfaces</small>
              </div>
            </div>
            <div className="pt-fs-item">
              <Icon name="water" size={24}/>
              <div>
                <strong>Water Resistant</strong>
                <small>&amp; Hygienic</small>
              </div>
            </div>
            <div className="pt-fs-item">
              <Icon name="building" size={24}/>
              <div>
                <strong>Frost Resistant</strong>
                <small>&amp; Durable</small>
              </div>
            </div>
            <div className="pt-fs-item">
              <Icon name="sparkle" size={24}/>
              <div>
                <strong>Easy to Clean</strong>
                <small>&amp; Maintain</small>
              </div>
            </div>
            <div className="pt-fs-item">
              <Icon name="leaf" size={24}/>
              <div>
                <strong>Sustainable &amp;</strong>
                <small>Eco Friendly</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
