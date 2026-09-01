import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PwaRegister } from "@/components/PwaRegister";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "7L Advisory",
  title: {
    default: "7L Advisory — Advisory, engineered for action",
    template: "%s | 7L Advisory",
  },
  description:
    "7L Advisory combines professional expertise, AI, data and purpose-built technology — PIT24, CIT24, RISK24, TP24, GMT24 and LAW24 — to help organisations solve complex tax, risk, legal and business challenges.",
  keywords: [
    "technology-powered advisory",
    "AI advisory services",
    "tax technology Thailand",
    "fraud detection platform",
    "tax due diligence software",
    "financial due diligence platform",
    "transfer pricing software",
    "Thai corporate income tax software",
    "OECD Pillar Two software",
    "legal technology",
    "contract intelligence platform",
  ],
  openGraph: {
    title: "7L Advisory — Advisory, engineered for action",
    description: "We don't stop at reports. We build the technology that helps businesses decide, comply, detect risk, and grow.",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    title: "7L Advisory",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#070b16",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <PwaRegister />
      </body>
    </html>
  );
}
