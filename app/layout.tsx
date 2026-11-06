import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "La Brasería Grill House | Pollo a la leña y parrillas en SJL",
  description:
    "La Brasería Grill House: el mejor pollo a la leña y parrillas de San Juan de Lurigancho. Av. Gran Chimú 959. Pide por WhatsApp.",
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "La Brasería Grill House",
    description: "Pasión por las brasas. Pollo a la leña, parrillas y anticuchos en San Juan de Lurigancho.",
    locale: "es_PE",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0e0a07" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
