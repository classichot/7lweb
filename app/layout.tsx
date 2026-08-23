import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "7L Advisory — Advisory, engineered for action",
    template: "%s | 7L Advisory",
  },
  description:
    "7L Advisory combines professional expertise, AI, data and purpose-built technology — PIT24, CIT24, RISK24, TP24 and GMT24 — to help organisations solve complex tax, risk and business challenges.",
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
  ],
  openGraph: {
    title: "7L Advisory — Advisory, engineered for action",
    description: "We don't stop at reports. We build the technology that helps businesses decide, comply, detect risk, and grow.",
    type: "website",
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#0d0f14",
  width: "device-width",
  initialScale: 1,
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
      </body>
    </html>
  );
}
