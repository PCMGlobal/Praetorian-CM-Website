import type { Metadata } from "next";
import { Sora, Work_Sans } from "next/font/google";
import UtilityBar from "@/app/components/UtilityBar";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Reveal from "@/app/components/Reveal";
import Analytics from "@/app/components/Analytics";
import Script from "next/script";
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
export const metadata: Metadata = {
  title: {
    default: "Praetorian Construction Management",
    template: "%s | Praetorian Construction Management",
  },
  description:
    "Owner's team construction management for the global mining sector, with AI-powered cost intelligence built in.",
  metadataBase: new URL("https://praetoriancm.com"),
  openGraph: {
    title: "Praetorian Construction Management",
    description:
      "Owner's team construction management for the global mining sector, with AI-powered cost intelligence built in.",
    url: "https://praetoriancm.com",
    siteName: "Praetorian Construction Management",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Praetorian Construction Management",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praetorian Construction Management",
    description:
      "Owner's team construction management for the global mining sector, with AI-powered cost intelligence built in.",
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
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            "name": "Praetorian Construction Management",
            "url": "https://praetoriancm.com",
            "logo": "https://praetoriancm.com/pcml-logo-colour.svg",
              "image": "https://praetoriancm.com/pcml-logo-colour.svg",
            "description": "Owner's team construction management for the global mining sector, with AI-powered cost intelligence built in.",
            "telephone": "+17809890289",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "201-10441 178 Street",
              "addressLocality": "Edmonton",
              "addressRegion": "AB",
              "postalCode": "T5S 1R5",
              "addressCountry": "CA"
            },
            "geo": { "@type": "GeoCoordinates", "latitude": 53.5461, "longitude": -113.6216 }, "sameAs": [
              "https://www.linkedin.com/company/praetorian-construction-management",
              "https://www.youtube.com/@PraetorianCM",
              "https://x.com/PraetorianCMgmt",
              "https://www.instagram.com/praetoriancm"
            ]
          })}}
        />
      </body>
    </html>
  );
}

