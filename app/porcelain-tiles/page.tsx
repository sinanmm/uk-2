import { Metadata } from "next";
import PorcelainHero from "@/components/porcelain-tiles/PorcelainHero";
import SuitableSpaces from "@/components/porcelain-tiles/SuitableSpaces";
import ProductSpecifications from "@/components/porcelain-tiles/ProductSpecifications";
import EffectsGrid from "@/components/porcelain-tiles/EffectsGrid";
import AntiSlipSection from "@/components/porcelain-tiles/AntiSlipSection";
import CatalogueSection from "@/components/CatalogueSection";
import ContactCTA from "@/components/porcelain-tiles/ContactCTA";
import BottomBenefits from "@/components/porcelain-tiles/BottomBenefits";

export const metadata: Metadata = {
  title: "Porcelain Tiles | Premium Indoor & Outdoor Tiles",
  description: "Explore premium porcelain tiles in a wide range of colours, sizes, finishes and effects, including durable R11 anti-slip outdoor porcelain tiles.",
};

export default function PorcelainTilesPage() {
  return (
    <div className="pt-redesign-page">
      <PorcelainHero />
      <SuitableSpaces />
      <ProductSpecifications />
      <EffectsGrid />
      <AntiSlipSection />
      <CatalogueSection title="PORCELAIN TILES & SURFACE CATALOGUES" />
      <ContactCTA />
      <BottomBenefits />
    </div>
  );
}
