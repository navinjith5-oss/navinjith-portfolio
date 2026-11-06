import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickCommandPalette from "@/components/QuickCommandPalette";
import CyberBackground from "@/components/CyberBackground";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "NAVINJITH K | Cybersecurity Professional | Security Operations & AI",
  description: "Cybersecurity portfolio of Navinjith K, EC-Council Certified SOC Analyst (CSA) and Cyber Forensics graduate. Threat monitoring, SIEM log analysis, and SecureLoop AI prototype.",
  authors: [{ name: "Navinjith K" }],
  keywords: [
    "Navinjith K",
    "SOC Analyst",
    "Cybersecurity",
    "Certified SOC Analyst",
    "CSA",
    "EC-Council",
    "SecureLoop AI",
    "SIEM",
    "Splunk",
    "QRadar",
    "Sentinel",
    "Cyber Forensics"
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#050811] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300 relative min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-semibold focus:rounded-md shadow-lg"
        >
          Skip to main content
        </a>
        <CyberBackground />
        <Header />
        <main id="main-content" className="relative z-10 min-h-screen">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <QuickCommandPalette />
      </body>
    </html>
  );
}
