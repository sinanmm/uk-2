"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";

const nav = [
  { href: "/", label: "Home" },
  { href: "/tiles", label: "Tiles" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" }
];

const whatsappUrl =
  "https://wa.me/447860215454?text=Hello%20Bayshield%20International%20UK%2C%20I%27d%20like%20to%20enquire%20about%20your%20outdoor%20porcelain%20pavers.";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-group">
            <a href="tel:+447776636037"><Icon name="phone" size={16} />07776 636037</a>
            <a href="mailto:info@bayshieldinternational.com"><Icon name="mail" size={16} />info@bayshieldinternational.com</a>
          </div>
          <div className="topbar-group topbar-right">
            <span><Icon name="truck" size={18} />Delivered Across UK</span>
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={17} /></a>
            <a href="#" aria-label="Facebook"><Icon name="facebook" size={17} /></a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Bayshield International UK home">
            <span className="brand-mark"><span>B</span></span>
            <span className="brand-copy">
              <strong>BAYSHIELD</strong>
              <small>INTERNATIONAL UK</small>
            </span>
          </Link>

          <nav className={`main-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} className={active ? "active" : ""} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              );
            })}
            <div className="mobile-actions">
              <Link href="/contact" className="button button-primary" onClick={() => setOpen(false)}>Get a Quote</Link>
              <a href={whatsappUrl} className="button button-outline" target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={18} /> Chat on WhatsApp
              </a>
            </div>
          </nav>

          <div className="header-actions">
            <Link href="/contact" className="button button-primary">Get a Quote</Link>
            <a href={whatsappUrl} className="button button-outline" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} /> Chat on WhatsApp
            </a>
          </div>

          <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
            <Icon name={open ? "close" : "menu"} size={25} />
          </button>
        </div>
      </header>
    </>
  );
}
