import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Pure Surface Solutions | Outdoor Porcelain Pavers",
    template: "%s | Pure Surface Solutions"
  },
  description:
    "Premium 20mm outdoor porcelain pavers with R11 anti-slip performance, nationwide delivery across the UK.",
  metadataBase: new URL("https://puresurface.co.uk")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jakarta.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
