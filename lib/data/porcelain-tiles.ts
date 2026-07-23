import { LucideIcon, Armchair, CookingPot, Bath, Bed, Building2, Hotel, Store, Leaf } from 'lucide-react';

export interface SpaceApplication {
  id: string;
  label: string;
  icon: any; // LucideIcon
  isOutdoor?: boolean;
}

export const applications: SpaceApplication[] = [
  { id: 'living', label: 'Living Room', icon: Armchair },
  { id: 'kitchen', label: 'Kitchen', icon: CookingPot },
  { id: 'bathroom', label: 'Bathroom', icon: Bath },
  { id: 'bedroom', label: 'Bedroom', icon: Bed },
  { id: 'commercial', label: 'Commercial Projects', icon: Building2 },
  { id: 'hotel', label: 'Hotel & Hospitality', icon: Hotel },
  { id: 'retail', label: 'Retail & Shops', icon: Store },
  { id: 'outdoor', label: 'Outdoor Areas', icon: Leaf, isOutdoor: true },
];

export interface PorcelainColour {
  id: string;
  label: string;
  hex?: string;
  isMulticolour?: boolean;
}

export const porcelainColours: PorcelainColour[] = [
  { id: 'white', label: 'White', hex: '#F4F5F3' },
  { id: 'ivory', label: 'Ivory', hex: '#EAE6DD' },
  { id: 'beige', label: 'Beige', hex: '#D9C7AE' },
  { id: 'cream', label: 'Cream', hex: '#E4C5A7' },
  { id: 'light-grey', label: 'Light Grey', hex: '#D7D4CF' },
  { id: 'grey', label: 'Grey', hex: '#A9A7A1' },
  { id: 'dark-grey', label: 'Dark Grey', hex: '#686866' },
  { id: 'black', label: 'Black', hex: '#252628' },
  { id: 'brown', label: 'Brown', hex: '#795846' },
  { id: 'taupe', label: 'Taupe', hex: '#A28D7B' },
  { id: 'graphite', label: 'Graphite', hex: '#696967' },
  { id: 'moka', label: 'Moka', hex: '#A58D7D' },
  { id: 'sand', label: 'Sand', hex: '#D8C8B5' },
  { id: 'green', label: 'Green', hex: '#657464' },
  { id: 'blue', label: 'Blue', hex: '#6A8798' },
  { id: 'multicolour', label: 'Multicolour', isMulticolour: true },
];

export interface TileSize {
  w: number;
  h: number;
  landscape?: boolean;
}

export const tileSizes: TileSize[] = [
  { w: 600, h: 300, landscape: true },
  { w: 600, h: 600 },
  { w: 600, h: 900, landscape: false },
  { w: 1200, h: 600, landscape: true },
];

export interface TileFinish {
  id: string;
  label: string;
  img: string;
}

export const tileFinishes: TileFinish[] = [
  { id: 'matt', label: 'Matt', img: '/images/porcelain-tiles/finishes/matt.png' },
  { id: 'glossy', label: 'Glossy', img: '/images/porcelain-tiles/finishes/glossy.png' },
  { id: 'carving', label: 'Carving', img: '/images/porcelain-tiles/finishes/carving.png' },
  { id: 'high-gloss', label: 'High Gloss', img: '/images/porcelain-tiles/finishes/high-gloss.png' },
  { id: 'iridium', label: 'Iridium', img: '/images/porcelain-tiles/finishes/iridium.png' },
  { id: 'stone-finish', label: 'Stone Finish', img: '/images/porcelain-tiles/finishes/stone-finish.png' },
  { id: 'anti-slip', label: 'Anti-Slip\n(R11)', img: '/images/porcelain-tiles/finishes/anti-slip-r11.png' },
];

export interface TileEffect {
  id: string;
  label: string;
  img?: string;
  isMore?: boolean;
}

export const tileEffects: TileEffect[] = [
  { id: 'marble', label: 'Marble Effect', img: '/images/porcelain-tiles/effects/marble-effect.webp' },
  { id: 'stone', label: 'Stone Effect', img: '/images/porcelain-tiles/effects/stone-effect.webp' },
  { id: 'concrete', label: 'Concrete Effect', img: '/images/porcelain-tiles/effects/concrete-effect.webp' },
  { id: 'wood', label: 'Wood Effect', img: '/images/porcelain-tiles/effects/wood-effect.webp' },
  { id: 'terrazzo', label: 'Terrazzo', img: '/images/porcelain-tiles/effects/terrazzo-effect.webp' },
  { id: 'onyx', label: 'Onyx Effect', img: '/images/porcelain-tiles/effects/onyx-effect.webp' },
  { id: 'travertine', label: 'Travertine Effect', img: '/images/porcelain-tiles/effects/travertine-effect.webp' },
  { id: 'metallic', label: 'Metallic Effect', img: '/images/porcelain-tiles/effects/metallic-effect.webp' },
  { id: 'cement', label: 'Cement Effect', img: '/images/porcelain-tiles/effects/cement-effect.webp' },
  { id: 'decorative', label: 'Decorative', img: '/images/porcelain-tiles/effects/decorative-effect.webp' },
  { id: 'plain', label: 'Plain Colours', img: '/images/porcelain-tiles/effects/plain-colour-effect.webp' },
  { id: 'more', label: 'And Many\nMore...', isMore: true },
];

export const antiSlipApplications = [
  { id: 'garden', label: 'Garden & Patios', img: '/images/porcelain-tiles/outdoor/garden-patio.png' },
  { id: 'pool', label: 'Pool Surrounds', img: '/images/porcelain-tiles/outdoor/pool-surround.png' },
  { id: 'driveway', label: 'Driveways & Pathways', img: '/images/porcelain-tiles/outdoor/driveway-pathway.png' },
  { id: 'balcony', label: 'Balconies & Terraces', img: '/images/porcelain-tiles/outdoor/balcony-terrace.png' },
  { id: 'commercial', label: 'Commercial Outdoors', img: '/images/porcelain-tiles/outdoor/commercial-outdoor.png' },
];

export const antiSlipSizes = [
  { w: 600, h: 900 },
];
