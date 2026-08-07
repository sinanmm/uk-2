import Metadata from "next";
import CatalogueSection from "@/components/CatalogueSection";

export const metadata = {
  title: "Product Catalogues & Technical Guides | Pure Surface Solutions",
  description: "Download official Pure Surface Solutions digital catalogues, product brochures, and technical specification guides for porcelain slabs, floor & wall tiles."
};

export default function CataloguesPage() {
  return (
    <main className="catalogues-page">
      <CatalogueSection
        showHeroBanner={true}
        title="DOWNLOAD OFFICIAL PRODUCT CATALOGUES"
        subtitle="Access our complete portfolio of premium architectural porcelain slabs, indoor & outdoor tiles, R11 anti-slip surfaces, and technical specifications."
      />
    </main>
  );
}
