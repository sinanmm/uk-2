import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light" aria-label="Pure Surface Solutions home" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 180, height: 180 }}>
            <div style={{ position: 'absolute', width: '134px', height: '134px', backgroundColor: '#ffffff', borderRadius: '50%' }}></div>
            <Image src="/images/logo_round.png" alt="Pure Surface Solutions Logo" width={180} height={180} style={{ objectFit: 'contain', position: 'relative', zIndex: 1 }} />
          </Link>
          <p>Premium outdoor porcelain pavers for patios, gardens, terraces, pathways and driveways across the UK.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/tiles">Tiles</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div>
          <h3>Our Products</h3>
          <Link href="/porcelain-tiles#our-products">20mm Outdoor Pavers</Link>
          <Link href="/porcelain-tiles#our-products">R11 Anti-Slip Tiles</Link>
          <Link href="/porcelain-tiles#our-products">Natural Stone Effects</Link>
          <Link href="/porcelain-tiles#our-products">Commercial Porcelain</Link>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <a href="tel:00447407048979"><Icon name="phone" size={17}/>0044-7407048979</a>
          <a href="tel:+441212493778"><Icon name="phone" size={17}/>0121 249 3778</a>
          <a href="mailto:info@puresurface.co.uk"><Icon name="mail" size={17}/>info@puresurface.co.uk</a>
          <span><Icon name="truck" size={18}/>Nationwide UK delivery</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Pure Surface Solutions. All rights reserved.</span>
          <span>Privacy Policy <i/> Terms &amp; Conditions</span>
        </div>
      </div>
    </footer>
  );
}
