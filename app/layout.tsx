import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Pure Surface Solutions | Outdoor Porcelain Pavers",
    template: "%s | Pure Surface Solutions"
  },
  description:
    "Premium 20mm outdoor porcelain pavers with R11 anti-slip performance, nationwide delivery across the UK.",
  metadataBase: new URL("https://bayshieldinternational.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
