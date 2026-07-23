import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Porcelain Tiles",
  description: "Explore Pure Surface Solutions's premium porcelain tile and outdoor paver collection."
};

export default function TilesPage() {
  redirect("/porcelain-tiles#our-products");
}

