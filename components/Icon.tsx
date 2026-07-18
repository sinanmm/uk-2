import type { SVGProps } from "react";

type IconName =
  | "phone"
  | "mail"
  | "truck"
  | "instagram"
  | "facebook"
  | "whatsapp"
  | "arrow"
  | "shield"
  | "diamond"
  | "tag"
  | "water"
  | "sparkle"
  | "grid"
  | "building"
  | "home"
  | "tools"
  | "search"
  | "heart"
  | "check"
  | "clock"
  | "map"
  | "menu"
  | "close"
  | "chevron";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 22, ...props }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  const paths: Record<IconName, React.ReactNode> = {
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.49 19.49 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    truck: <><path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></>,
    facebook: <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3.2l.8-4H13V9c0-.7.3-1 1-1z" fill="currentColor" stroke="none"/>,
    whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5z"/><path d="M8.2 7.7c.3-.6.7-.6 1-.6h.3c.2 0 .4.1.5.5l.8 1.9c.1.3.1.5-.1.7l-.6.7c-.2.2-.3.4-.1.7.6 1.1 1.5 2 2.6 2.6.3.2.5.1.7-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.5.3.5.5 0 .3-.2 1.4-.9 2-.6.5-1.4.8-2.3.6-1.5-.3-3.5-1-5.4-2.8-1.5-1.4-2.5-3.1-2.8-4.4-.3-1 .1-1.7.4-2z"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>,
    diamond: <><path d="m6 3-4 6 10 12L22 9l-4-6z"/><path d="M2 9h20M6 3l6 18 6-18"/></>,
    tag: <><path d="M20.6 13.6 11 23l-9-9V4h10z"/><circle cx="7" cy="9" r="1.5"/></>,
    water: <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13z"/>,
    sparkle: <><path d="m12 3-1.3 4.2L7 9l3.7 1.8L12 15l1.3-4.2L17 9l-3.7-1.8z"/><path d="m19 15-.7 2.2L16 18l2.3.8L19 21l.7-2.2L22 18l-2.3-.8z"/></>,
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    building: <><path d="M3 21h18M6 21V7l6-4 6 4v14"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/></>,
    home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-6h6v6"/></>,
    tools: <><path d="m14.7 6.3 3-3a4.2 4.2 0 0 0-5.4 5.4L4 17l3 3 8.3-8.3a4.2 4.2 0 0 0 5.4-5.4l-3 3z"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>
  };

  return <svg {...common} {...props}>{paths[name]}</svg>;
}
