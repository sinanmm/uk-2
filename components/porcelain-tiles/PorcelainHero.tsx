import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Droplets, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function PorcelainHero() {
  return (
    <section id="hero" className="pt-redesign-hero">
      <div 
        className="pt-hero-bg-wrapper"
        style={{ 
          backgroundImage: 'url("/images/porcelain-tiles/hero-porcelain-calacatta-kitchen-4k.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: 0
        }}
      >
        <div className="pt-hero-overlay-gradient"></div>
      </div>
      <div className="container pt-hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <h1 className="pt-hero-h1">PORCELAIN TILES</h1>
          <h2 className="pt-hero-h2">Premium Surfaces. Timeless Spaces.</h2>
          <p className="pt-hero-p">
            Discover our extensive range of premium porcelain tiles inspired by
            natural beauty and designed for every space. Durable, stylish and
            available in a variety of colours, sizes and finishes.
          </p>
        </Reveal>

        <Reveal delay={150} className="pt-hero-features-row">
          <div className="pt-feat-item">
            <ShieldCheck size={28} className="pt-feat-icon" />
            <div className="pt-feat-text">
              <strong>PREMIUM QUALITY</strong>
              <span>Long lasting & durable</span>
            </div>
          </div>
          <div className="pt-feat-item">
            <Droplets size={28} className="pt-feat-icon" />
            <div className="pt-feat-text">
              <strong>WATER RESISTANT</strong>
              <span>Ideal for all areas</span>
            </div>
          </div>
          <div className="pt-feat-item">
            <Sparkles size={28} className="pt-feat-icon" />
            <div className="pt-feat-text">
              <strong>EASY TO MAINTAIN</strong>
              <span>Low maintenance</span>
            </div>
          </div>
          <div className="pt-feat-item pt-feat-card">
            <span className="pt-r11-large">R11</span>
            <div className="pt-feat-text">
              <strong>ANTI-SLIP (R11)</strong>
              <span>Safe for outdoor use</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
