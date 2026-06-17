import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GlassHeader } from "@/components/layout/GlassHeader";
import { Footer } from "@/components/layout/Footer";
import { MultiChannelFloat } from "@/components/layout/MultiChannelFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Royal Forest Resort — Nature Resort & Wedding Destination in Kanpur (Mandhana, Bithoor Road)",
  description: "A green escape where nature and luxury live as one. Lush forest-gardens, swaying palms, designed cottages, and one of Kanpur's largest swimming pools.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-gold)] selection:text-[var(--color-forest)]">
        <SmoothScrollProvider>
          <GlassHeader />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MultiChannelFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
