import type { Metadata } from "next";
import { Sora, Work_Sans } from "next/font/google";
import UtilityBar from "@/app/components/UtilityBar";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Reveal from "@/app/components/Reveal";
import Analytics from "@/app/components/Analytics";
import { SITE_URL, SITE_NAME, organizationJsonLd } from "@/lib/seo";
import "./globals.css";
const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});
const DEFAULT_DESCRIPTION =
  "Owner's team construction management for the global mining sector, with AI-powered cost intelligence built in.";
export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  verification: {
    google: "QI8JR4Es8p-RiRRruBxrefT4pXXntSI4ZV8nnyyU3yU",
  },
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: "./",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${sora.variable} ${workSans.variable}`}>
      <style>{`*, *::before, *::after { box-sizing: border-box; } html, body { max-width: 100%; overflow-x: hidden; }`}</style>
      <body>
        <UtilityBar />
        <Navbar />
        {children}
        <Footer />
        <Reveal />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
