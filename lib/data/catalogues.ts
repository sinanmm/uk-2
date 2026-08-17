export interface CatalogueItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pdfPath: string;
  coverImage: string;
  fileSize: string;
  badge: string;
  categories: string[];
  highlights: string[];
}

export const catalogues: CatalogueItem[] = [
  {
    id: "pure-surface",
    title: "Pure Surface Catalogue",
    subtitle: "Luxury Porcelain Slabs & Architectural Surfaces",
    description: "Discover our flagship master collection featuring luxury porcelain slabs, large-format surfaces, marble effects, and high-performance architectural finishes for luxury interiors & exteriors.",
    pdfPath: "/Pure Surface Catalogue.pdf",
    coverImage: "/images/catalogues/cover-pure-surface.png",
    fileSize: "38.8 MB",
    badge: "Master Collection",
    categories: ["Porcelain Slabs", "Architectural Surfaces", "Marble & Stone", "Countertops"],
    highlights: [
      "Large format sizes: 2600x1200mm & 3200x1600mm",
      "6mm, 12mm & 20mm thickness technical specs",
      "Comprehensive surface finish overview",
      "Architectural application & installation guidelines"
    ]
  },
  {
    id: "pure-group-vol-2",
    title: "Pure Surface Catalogue",
    subtitle: "Porcelain Tiles & Outdoor Paver Collections",
    description: "Explore Volume 2 featuring our extensive ranges of premium porcelain floor & wall tiles, outdoor R11 anti-slip pavers, and versatile commercial surface solutions.",
    pdfPath: "/Pure Group Catalogue 2.pdf",
    coverImage: "/images/catalogues/cover-pure-surface.png",
    fileSize: "42.6 MB",
    badge: "Volume 2",
    categories: ["Floor & Wall Tiles", "R11 Anti-Slip", "Outdoor Pavers", "Commercial"],
    highlights: [
      "Standard & large tile sizes (600x300mm to 1200x600mm)",
      "R11 anti-slip safety certification guide",
      "High-traffic residential and commercial collections",
      "Color palettes, shade variations and textures"
    ]
  },
  {
    id: "pure-group-vol-3",
    title: "Pure Surface Catalogue",
    subtitle: "Modern Architectural Slabs & Contemporary Collections",
    description: "Volume 3 showcases contemporary architectural tile series, thin porcelain cladding options, natural stone looks, and in-depth engineering data.",
    pdfPath: "/Pure Group Catalogue 3.pdf",
    coverImage: "/images/catalogues/cover-pure-surface.png",
    fileSize: "32.0 MB",
    badge: "Volume 3",
    categories: ["Architectural Slabs", "Facade Cladding", "Stone & Concrete", "Specifications"],
    highlights: [
      "Advanced large-format porcelain engineering",
      "Exterior façade and ventilated wall cladding solutions",
      "Project gallery and architectural inspiration",
      "Care, maintenance and structural technical sheets"
    ]
  }
];
