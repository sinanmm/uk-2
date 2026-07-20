import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function PorcelainTilesPage() {
  return (
    <div className="pt-page">
      {/* 1. Hero Section */}
      <section className="pt-hero">
        <div className="pt-hero-bg">
          <Image src="/images/hero-tiles.jpg" alt="Porcelain Tiles Hero" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
          <div className="pt-hero-overlay"></div>
        </div>
        <div className="container pt-hero-content">
          <Reveal>
            <div className="breadcrumbs">
              <Link href="/">Home</Link> &gt; <span>Porcelain Tiles</span>
            </div>
            <h1>PORCELAIN TILES</h1>
            <h2>Premium Surfaces. Timeless Spaces.</h2>
            <p>
              Discover our extensive range of premium porcelain tiles
              inspired by natural beauty and designed for every space.
              Durable, stylish and available in a variety of colours, sizes
              and finishes.
            </p>
          </Reveal>
          
          <Reveal className="pt-hero-features" delay={150}>
            <div className="pt-feature-item">
              <Icon name="diamond" size={42} />
              <div className="pt-feature-text">
                <strong>PREMIUM QUALITY</strong>
                <small>Long lasting &amp; durable</small>
              </div>
            </div>
            <div className="pt-feature-item">
              <Icon name="water" size={42} />
              <div className="pt-feature-text">
                <strong>WATER RESISTANT</strong>
                <small>Ideal for all areas</small>
              </div>
            </div>
            <div className="pt-feature-item">
              <Icon name="sparkle" size={42} />
              <div className="pt-feature-text">
                <strong>EASY TO MAINTAIN</strong>
                <small>Low maintenance</small>
              </div>
            </div>
            <div className="pt-feature-item pt-highlight">
              <strong className="r11-badge">R11</strong>
              <div className="pt-feature-text">
                <strong>ANTI-SLIP (R11)</strong>
                <small>Safe for outdoor<br/>use</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Suitable Space Section */}
      <section className="pt-spaces">
        <div className="container">
          <Reveal>
            <h3 className="pt-section-title">SUITABLE FOR EVERY SPACE</h3>
            <div className="pt-space-grid">
              <div className="pt-space-item"><Icon name="couch" size={40} /><span>Living Room</span></div>
              <div className="pt-space-item"><Icon name="kitchen" size={40} /><span>Kitchen</span></div>
              <div className="pt-space-item"><Icon name="bath" size={40} /><span>Bathroom</span></div>
              <div className="pt-space-item"><Icon name="bed" size={40} /><span>Bedroom</span></div>
              <div className="pt-space-item"><Icon name="building" size={40} /><span>Commercial Projects</span></div>
              <div className="pt-space-item"><Icon name="storefront" size={40} /><span>Hotel &amp; Hospitality</span></div>
              <div className="pt-space-item"><Icon name="tag" size={40} /><span>Retail &amp; Shops</span></div>
              <div className="pt-space-item pt-highlight-space">
                <Icon name="leaf" size={40} />
                <span>Outdoor Areas<br/>(R11 Anti-Slip)</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Specs Grid (Colours, Sizes, Finishes, Thickness) */}
      <section className="pt-specs">
        <div className="container pt-specs-grid">
          
          <Reveal className="pt-spec-card pt-colours">
            <h4>COLOURS AVAILABLE</h4>
            <div className="pt-colours-grid">
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#fff'}}></div><span>White</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#f5f5dc'}}></div><span>Ivory</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#e6dec7'}}></div><span>Beige</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#fffdd0'}}></div><span>Cream</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#d3d3d3'}}></div><span>Light Grey</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#808080'}}></div><span>Grey</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#404040'}}></div><span>Dark Grey</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#202020'}}></div><span>Black</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#964B00'}}></div><span>Brown</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#483C32'}}></div><span>Taupe</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#3b3b3b'}}></div><span>Graphite</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#6b584b'}}></div><span>Moka</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#c2b280'}}></div><span>Sand</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#556b2f'}}></div><span>Green</span></div>
              <div className="pt-colour-item"><div className="swatch" style={{backgroundColor: '#4682b4'}}></div><span>Blue</span></div>
              <div className="pt-colour-item"><div className="swatch multicolour"></div><span>Multicolour</span></div>
            </div>
          </Reveal>

          <Reveal className="pt-spec-card pt-sizes" delay={50}>
            <h4>SIZES AVAILABLE (MM)</h4>
            <div className="pt-sizes-grid">
              <div className="pt-size-box"><div className="shape shape-600x600"></div><span>600 x 600</span></div>
              <div className="pt-size-box"><div className="shape shape-600x300"></div><span>600 x 300</span></div>
              <div className="pt-size-box"><div className="shape shape-600x900"></div><span>600 x 900</span></div>
              <div className="pt-size-box"><div className="shape shape-800x800"></div><span>800 x 800</span></div>
              <div className="pt-size-box"><div className="shape shape-1200x600"></div><span>1200 x 600</span></div>
              <div className="pt-size-box"><div className="shape shape-1200x1200"></div><span>1200 x 1200</span></div>
            </div>
            <button className="pt-button-outline">More sizes available on request</button>
          </Reveal>

          <Reveal className="pt-spec-card pt-finishes" delay={100}>
            <h4>FINISHES AVAILABLE</h4>
            <div className="pt-finishes-grid">
              <div className="pt-finish-item"><div className="finish-swatch f-matt"></div><span>Matt</span></div>
              <div className="pt-finish-item"><div className="finish-swatch f-glossy"></div><span>Glossy</span></div>
              <div className="pt-finish-item"><div className="finish-swatch f-carving"></div><span>Carving</span></div>
              <div className="pt-finish-item"><div className="finish-swatch f-highgloss"></div><span>High Gloss</span></div>
              <div className="pt-finish-item"><div className="finish-swatch f-iridium"></div><span>Iridium</span></div>
              <div className="pt-finish-item"><div className="finish-swatch f-stone"></div><span>Stone Finish</span></div>
              <div className="pt-finish-item"><div className="finish-swatch f-antislip"></div><span>Anti-Slip (R11)</span></div>
            </div>
          </Reveal>

          <Reveal className="pt-spec-card pt-thickness" delay={150}>
            <h4>THICKNESS AVAILABLE</h4>
            <div className="pt-slab-iso">
              <div className="shape-iso-slab-thick"></div>
            </div>
            <ul className="pt-thickness-list">
              <li>9mm</li>
              <li>10mm</li>
              <li>12mm</li>
              <li>20mm (Outdoor R11)</li>
            </ul>
          </Reveal>

        </div>
      </section>

      {/* 4. Effects / Styles Available */}
      <section className="pt-effects">
        <div className="container">
          <Reveal>
            <h3 className="pt-section-title left">EFFECTS / STYLES AVAILABLE</h3>
            <div className="pt-effects-grid">
              <div className="pt-effect-item">
                <div className="effect-img"><Image src="/images/tile-marble.jpg" alt="Marble Effect" fill style={{ objectFit: 'cover' }} /></div>
                <span>Marble Effect</span>
              </div>
              <div className="pt-effect-item">
                <div className="effect-img"><Image src="/images/tile-grey-stone.jpg" alt="Stone Effect" fill style={{ objectFit: 'cover' }} /></div>
                <span>Stone Effect</span>
              </div>
              <div className="pt-effect-item">
                <div className="effect-img"><Image src="/images/tile-anthracite.jpg" alt="Concrete Effect" fill style={{ objectFit: 'cover' }} /></div>
                <span>Concrete Effect</span>
              </div>
              <div className="pt-effect-item">
                <div className="effect-img wood-bg"></div>
                <span>Wood Effect</span>
              </div>
              <div className="pt-effect-item">
                <div className="effect-img terrazzo-bg"></div>
                <span>Terrazzo</span>
              </div>
              <div className="pt-effect-item">
                <div className="effect-img onyx-bg"></div>
                <span>Onyx Effect</span>
              </div>
              <div className="pt-effect-item">
                <div className="effect-img travertine-bg"></div>
                <span>Travertine Effect</span>
              </div>
              <div className="pt-effect-item">
                <div className="effect-img metallic-bg"></div>
                <span>Metallic Effect</span>
              </div>
              <div className="pt-effect-item">
                <div className="effect-img cement-bg"></div>
                <span>Cement Effect</span>
              </div>
              <div className="pt-effect-item">
                <div className="effect-img deco-bg"></div>
                <span>Decorative</span>
              </div>
              <div className="pt-effect-item">
                <div className="effect-img plain-bg"></div>
                <span>Plain Colours</span>
              </div>
              <div className="pt-effect-item more-box">
                <span>And Many More...</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. R11 Anti-Slip Tiles Box */}
      <section className="pt-r11">
        <div className="container">
          <Reveal className="pt-r11-card">
            <div className="r11-left">
              <h3>R11 ANTI-SLIP TILES <Icon name="leaf" size={24}/></h3>
              <strong>Safe. Strong. Stylish.</strong>
              <p>Our R11 anti-slip porcelain tiles are specially designed for outdoor and wet areas where extra grip and durability are essential. Perfect combination of safety and style.</p>
              <ul className="r11-features">
                <li><Icon name="check" size={18}/> High slip resistance (R11 Rating)</li>
                <li><Icon name="check" size={18}/> Ideal for outdoor &amp; wet areas</li>
                <li><Icon name="check" size={18}/> Durable &amp; weather resistant</li>
                <li><Icon name="check" size={18}/> Easy to clean &amp; maintain</li>
              </ul>
            </div>
            
            <div className="r11-right">
              <div className="r11-scenes">
                <div className="r11-scene-item">
                  <div className="r11-img"><Image src="/images/category-outdoor.jpg" alt="Garden & Patios" fill style={{ objectFit: 'cover' }} /></div>
                  <span>Garden &amp; Patios</span>
                </div>
                <div className="r11-scene-item">
                  <div className="r11-img"><Image src="https://images.unsplash.com/photo-1576016770956-fbe95f00e932?q=80&w=600&auto=format&fit=crop" alt="Pool Surrounds" fill style={{ objectFit: 'cover' }} /></div>
                  <span>Pool Surrounds</span>
                </div>
                <div className="r11-scene-item">
                  <div className="r11-img"><Image src="https://images.unsplash.com/photo-1595180058863-78e718d20387?q=80&w=600&auto=format&fit=crop" alt="Driveways & Pathways" fill style={{ objectFit: 'cover' }} /></div>
                  <span>Driveways &amp; Pathways</span>
                </div>
                <div className="r11-scene-item">
                  <div className="r11-img"><Image src="/images/hero-home.jpg" alt="Balconies & Terraces" fill style={{ objectFit: 'cover' }} /></div>
                  <span>Balconies &amp; Terraces</span>
                </div>
                <div className="r11-scene-item">
                  <div className="r11-img"><Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop" alt="Commercial Outdoors" fill style={{ objectFit: 'cover' }} /></div>
                  <span>Commercial Outdoors</span>
                </div>
              </div>
              
              <div className="r11-bottom-specs">
                <div className="r11-spec-col">
                  <h5>AVAILABLE SIZES</h5>
                  <div className="r11-boxes">
                    <div className="r11-box">600 x 600<br/>mm</div>
                    <div className="r11-box">600 x 900<br/>mm</div>
                    <div className="r11-box">800 x 800<br/>mm</div>
                    <div className="r11-box">1200 x 600<br/>mm</div>
                  </div>
                </div>
                
                <div className="r11-spec-col">
                  <h5>AVAILABLE FINISHES</h5>
                  <div className="r11-finishes">
                    <div className="r11-finish-item"><div className="finish-swatch f-antislip"></div><span>Anti-Slip (R11)</span></div>
                    <div className="r11-finish-item"><div className="finish-swatch f-stone"></div><span>Stone Finish (R11)</span></div>
                    <div className="r11-finish-item"><div className="finish-swatch f-matt"></div><span>Matt (R11)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="pt-cta">
        <div className="container">
          <Reveal className="pt-cta-inner">
            <div className="pt-cta-left">
              <h3>NEED HELP CHOOSING THE RIGHT TILE?</h3>
              <p>Our surface experts are here to help you find the perfect match for your project.</p>
              <div className="pt-cta-actions">
                <a href="#" className="button button-primary cta-btn-green"><Icon name="whatsapp" size={18}/> WHATSAPP US</a>
                <a href="/contact" className="button button-outline cta-btn-outline"><Icon name="mail" size={18}/> EMAIL US</a>
              </div>
            </div>
            <div className="pt-cta-right">
              <ul className="pt-cta-list">
                <li><Icon name="check" size={18}/> Expert advice for your project</li>
                <li><Icon name="check" size={18}/> Samples available on request</li>
                <li><Icon name="check" size={18}/> Fast response within 24 hours</li>
                <li><Icon name="check" size={18}/> Nationwide delivery across the UK</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Footer Strip */}
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
              <Icon name="shield" size={24}/>
              <div>
                <strong>R11 Anti-Slip</strong>
                <small>Outdoor Safe</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
