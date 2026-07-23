import Image from "next/image";
import Link from "next/link";
import { 
  Layers, ShieldCheck, Sparkles, Leaf, Info, 
  Thermometer, Droplet, Sun, Calendar, Clock,
  CheckCircle2, Brush
} from "lucide-react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import "./slabs.css";

// ---------------------------------------------------------
// DATA ARRAYS
// ---------------------------------------------------------

const heroFeatures = [
  { id: 'large-format', icon: Layers, label: 'Large Format' },
  { id: 'high-strength', icon: ShieldCheck, label: 'High Strength' },
  { id: 'easy-clean', icon: Sparkles, label: 'Easy to Clean' },
  { id: 'sustainable', icon: Leaf, label: 'Sustainable' },
];

const slabSizes = [
  { 
    id: '6mm', 
    thickness: '6 mm', 
    weight: '(3.12 SQM)', 
    dims: '2600 × 1200 mm',
    img: '/images/porcelain-slabs/products/slab-6mm-final-v10.png',
    alt: 'Thin 6 millimetre white marble-effect porcelain slab'
  },
  { 
    id: '12mm', 
    thickness: '12 mm', 
    weight: '(5.12 SQM)', 
    dims: '3200 × 1600 mm',
    img: '/images/porcelain-slabs/products/slab-12mm-final-v10.png',
    alt: '12 millimetre white marble-effect large-format porcelain slab'
  },
  { 
    id: '20mm', 
    thickness: '20 mm', 
    weight: '(5.12 SQM)', 
    dims: '3200 × 1600 mm',
    img: '/images/porcelain-slabs/products/slab-20mm-final-v10.png',
    alt: 'Thick 20 millimetre beige stone-effect porcelain slab'
  },
];

const finishes = [
  { id: 'gloss', label: 'Gloss', img: '/images/porcelain-slabs/finishes/gloss-finish.png' },
  { id: 'matt', label: 'Matt', img: '/images/porcelain-slabs/finishes/matt-finish.png' },
  { id: 'silk', label: 'Silk', img: '/images/porcelain-slabs/finishes/silk-finish.png' },
];

const colours = [
  { id: 'white', label: 'White', hex: '#F0F1F0' },
  { id: 'ivory', label: 'Ivory', hex: '#E7DDCA' },
  { id: 'brown', label: 'Brown', hex: '#8B684C' },
  { id: 'blue', label: 'Blue', hex: '#5F7D8A' },
  { id: 'grey', label: 'Grey', hex: '#8B8B89' },
  { id: 'black', label: 'Black', hex: '#252320' },
];

const performanceFeatures = [
  { id: 'hygienic', icon: ShieldCheck, label: 'Anti-Microbial\nHygienic Surface' },
  { id: 'heat', icon: Thermometer, label: 'Ultra-High\nHeat Resistance' },
  { id: 'stain', icon: Droplet, label: 'Superior Stain\nResistance' },
  { id: 'possibilities', icon: Layers, label: 'Extensive\nPossibilities' },
  { id: 'uv', icon: Sun, label: 'Resists\nUV Rays' },
  { id: 'maintenance', icon: Clock, label: 'Low Maintenance\nNeeds' },
  { id: 'fading', icon: Sparkles, label: 'Stable &\nNon-Fading\nColours' },
  { id: 'clean', icon: Droplet, label: 'Easy To\nClean' },
  { id: 'lifetime', icon: Calendar, label: 'Lasts A\nLifetime' },
];

const contactOptions = [
  { id: 'whatsapp', icon: 'whatsapp', title: 'WhatsApp Us', desc: 'Chat with our team instantly', type: 'link', href: 'https://wa.me/447700900077', target: '_blank', rel: 'noopener noreferrer' },
  { id: 'quote', icon: 'document', title: 'Get a Quote', desc: 'Get a personalised quote today', type: 'link', href: '/quote' },
  { id: 'support', icon: 'headset', title: 'Expert Support', desc: "We're here to help you every step of the way", type: 'link', href: '/contact' },
];

const bottomBenefits = [
  { id: 'quality', icon: ShieldCheck, label: 'Premium Quality\nSurfaces' },
  { id: 'water', icon: Droplet, label: 'Water Resistant' },
  { id: 'frost', icon: Sparkles, label: 'Frost Resistant\n& Durable' },
  { id: 'clean', icon: Brush, label: 'Easy To Clean' },
  { id: 'sustainable', icon: Leaf, label: 'Sustainable &\nEco Friendly' },
];

// ---------------------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------------------

export const metadata = {
  title: 'Porcelain Slabs | Premium Large-Format Surfaces',
  description: 'Discover premium large-format porcelain slabs in multiple thicknesses, finishes and colours, engineered for strength, durability and seamless luxury.',
};

export default function PorcelainSlabsPage() {
  return (
    <main className="slabs-page">
      {/* 1. Hero Section */}
      <section className="slabs-hero">
        <div className="slabs-hero-bg">
          <Image 
            src="/images/porcelain-slabs/hero-slabs-black-marble-4k.png" 
            alt="Luxury modern kitchen with a black marble porcelain slab waterfall island" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center center' }} 
            sizes="100vw"
          />
        </div>
        <div className="slabs-hero-overlay"></div>
        <div className="slabs-hero-inner-container">
          <div className="slabs-hero-content">
            <Reveal>
              <h1 className="slabs-hero-h1">Porcelain Slabs</h1>
              <p className="slabs-hero-subtitle">Big in size. Bold in beauty.</p>
              <p className="slabs-hero-desc">
                Crafted with precision and inspired by nature, our porcelain slabs bring a sense of space, elegance and seamless luxury to every project.
              </p>
            </Reveal>
            
            <Reveal delay={150}>
              <div className="slabs-hero-features">
                {heroFeatures.map((feat) => {
                  const IconComp = feat.icon;
                  return (
                    <div key={feat.id} className="slabs-hero-feature">
                      <IconComp size={48} strokeWidth={1} />
                      <span>{feat.label}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Sizes & Thicknesses */}
      <section className="slabs-section-sizes">
        <div className="slabs-container">
          <Reveal className="slabs-section-header">
            <div className="slabs-section-title-wrap">
              <span className="slabs-section-line"></span>
              <h2 className="slabs-section-title">Available Sizes & Thicknesses</h2>
              <span className="slabs-section-line"></span>
            </div>
            <p className="slabs-section-subtitle">Engineered for performance. Designed for impact.</p>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="slabs-sizes-grid">
              {slabSizes.map((size) => (
                <div key={size.id} className="slabs-size-card">
                  <span className="slabs-card-thick">{size.thickness}</span>
                  <span className="slabs-card-label">Thickness</span>
                  <span className="slabs-card-weight">{size.weight}</span>
                  <div className="slabs-card-image">
                    <Image 
                      src={size.img}
                      alt={size.alt}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="slabs-card-dims">{size.dims}</span>
                </div>
              ))}
            </div>
            
            <div className="slabs-size-note">
              <Info size={16} /> 
              <span>Other sizes available on request for special projects.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="slabs-container">
        {/* 3. Finishes & Colours */}
        <section className="slabs-section-fc">
          <Reveal>
            <div className="slabs-fc-grid">
              <div className="slabs-fc-card">
                <h3>Available Finishes</h3>
                <div className="slabs-finishes-list">
                  {finishes.map((fin) => (
                    <div key={fin.id} className="slabs-finish-item">
                      <div className="slabs-finish-img">
                        <Image 
                          src={fin.img} 
                          alt={`${fin.label} finish`}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="100px"
                        />
                      </div>
                      <span className="slabs-finish-label">{fin.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="slabs-fc-card">
                <h3>Available Colours</h3>
                <div className="slabs-colours-list">
                  {colours.map((col) => (
                    <div key={col.id} className="slabs-colour-item">
                      <div className="slabs-colour-swatch" style={{ backgroundColor: col.hex }}></div>
                      <span className="slabs-colour-label">{col.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 4. Performance Strip */}
        <Reveal delay={50}>
          <section className="slabs-performance-strip">
            {performanceFeatures.map((perf) => {
              const IconComp = perf.icon;
              return (
                <div key={perf.id} className="slabs-perf-item">
                  <IconComp size={40} strokeWidth={1} />
                  <span style={{ whiteSpace: 'pre-line' }}>{perf.label}</span>
                </div>
              );
            })}
          </section>
        </Reveal>

        {/* 5. CTA Section */}
        <Reveal delay={100}>
          <section className="slabs-cta-section">
            <div className="slabs-cta-bg">
              <Image 
                src="/images/porcelain-slabs/cta/slab-kitchen-cta-4k.png" 
                alt="Luxury dark kitchen with a large 4K marble porcelain slab island" 
                fill 
                style={{ objectFit: 'cover', objectPosition: 'left center' }}
                sizes="100vw"
              />
            </div>
            <div className="slabs-cta-overlay"></div>
            
            <div className="slabs-cta-content">
              <h3 className="slabs-cta-h3">Need help choosing the right slab?</h3>
              <p className="slabs-cta-p">Our surface experts are here to help you find the perfect match for your project.</p>
              
              <div className="slabs-cta-actions">
                {contactOptions.map((opt) => (
                  <Link 
                    key={opt.id} 
                    href={opt.href!} 
                    className="slabs-cta-link"
                    target={opt.target}
                    rel={opt.rel}
                  >
                    <div className="slabs-cta-icon-wrap">
                      <Icon name={opt.icon as any} size={24} />
                    </div>
                    <div className="slabs-cta-text">
                      <strong>{opt.title}</strong>
                      <small>{opt.desc}</small>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      {/* 6. Bottom Benefits Strip */}
      <section className="slabs-benefits-strip">
        <div className="slabs-container">
          <Reveal>
            <div className="slabs-benefits-grid">
              {bottomBenefits.map((ben) => {
                const IconComp = ben.icon;
                return (
                  <div key={ben.id} className="slabs-benefit-item">
                    <IconComp size={28} strokeWidth={1.5} />
                    <span className="slabs-benefit-text" style={{ whiteSpace: 'pre-line' }}>{ben.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
