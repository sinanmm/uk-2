import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light">
            <span className="brand-mark"><span>B</span></span>
            <span className="brand-copy"><strong>BAYSHIELD</strong><small>INTERNATIONAL UK</small></span>
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
          <Link href="/tiles">20mm Outdoor Pavers</Link>
          <Link href="/tiles">R11 Anti-Slip Tiles</Link>
          <Link href="/tiles">Natural Stone Effects</Link>
          <Link href="/tiles">Commercial Porcelain</Link>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <a href="tel:+447860215454"><Icon name="phone" size={17}/>+44 7860 215454</a>
          <a href="tel:+441212493778"><Icon name="phone" size={17}/>0121 249 3778</a>
          <a href="mailto:info@bayshieldinternational.com"><Icon name="mail" size={17}/>info@bayshieldinternational.com</a>
          <span><Icon name="truck" size={18}/>Nationwide UK delivery</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Bayshield International UK. All rights reserved.</span>
          <span>Privacy Policy <i/> Terms &amp; Conditions</span>
        </div>
      </div>
    </footer>
  );
}
