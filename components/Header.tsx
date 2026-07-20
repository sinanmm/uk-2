"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";

const nav = [
  { href: "/", label: "Home" },
  { href: "/porcelain-tiles", label: "Porcelain Tiles" },
  { href: "/porcelain-slabs", label: "Porcelain Slabs" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" }
];

const whatsappUrl =
  "https://wa.me/447407048979?text=Hello%20Pure%20Surface%20Solutions%2C%20I%27d%20like%20to%20enquire%20about%20your%20outdoor%20porcelain%20pavers.";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-group">
            <a href="tel:00447407048979"><Icon name="phone" size={16} />0044-7407048979</a>
            <a href="mailto:info@puresurface.co.uk"><Icon name="mail" size={16} />info@puresurface.co.uk</a>
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
          <Link href="/" className="brand" aria-label="Pure Surface Solutions home">
            <Image src="/images/logo_round.png" alt="Pure Surface Solutions Logo" width={140} height={140} style={{ objectFit: 'contain' }} priority />
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
