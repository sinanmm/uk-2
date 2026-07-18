import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bayshield International UK | Outdoor Porcelain Pavers",
    template: "%s | Bayshield International UK"
  },
  description:
    "Premium 20mm outdoor porcelain pavers with R11 anti-slip performance, nationwide delivery across the UK.",
  metadataBase: new URL("https://bayshieldinternational.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
