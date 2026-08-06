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
          <p>Supplying for Residential and Commercial Projects across the UK</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/porcelain-tiles#our-products">Tiles</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div>
          <h3>Our Products</h3>
          <Link href="/porcelain-tiles#our-products">Suitable For Every Space</Link>
          <Link href="/porcelain-tiles#r11-anti-slip">R11 Anti-Slip Tiles</Link>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <a href="tel:07407048979"><Icon name="phone" size={17}/>07407048979</a>
          <a href="mailto:info@puresurface.co.uk"><Icon name="mail" size={17}/>info@puresurface.co.uk</a>
          <a href="https://www.instagram.com/pure.surfacesolutions?igsh=N2Q3dW9uaGJ6dm1s" target="_blank" rel="noreferrer"><Icon name="instagram" size={17}/>Instagram</a>
          <span><Icon name="truck" size={18}/>Nationwide UK delivery</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Pure Surface Solutions. All rights reserved.</span>
          <span>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <i />
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
