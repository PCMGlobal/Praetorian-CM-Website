import type { Metadata } from "next";
import { Sora, Work_Sans } from "next/font/google";
import UtilityBar from "@/app/components/UtilityBar";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Reveal from "@/app/components/Reveal";
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${sora.variable} ${workSans.variable}`}>
      <body>
        <UtilityBar />
        <Navbar />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
