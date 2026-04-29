import type { Metadata } from "next";

import "./globals.css";
import SmoothScrollProvider from "./utils/smoothScrollProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcadydesign.com"),

  title: {
    default: "Fintech Brand & Product Strategy | Fix What Blocks Capital",
    template: "%s | Fintech Strategy",
  },

  description:
    "Rajeev helps fintech and SaaS founders align product, narrative, and trust so users, investors, and the market understand the business clearly. Fix conversion leaks, hesitation, and positioning gaps that block capital.",

  keywords: [
    "fintech strategy",
    "fintech product strategy",
    "fintech branding",
    "startup positioning",
    "product narrative",
    "conversion optimization fintech",
    "investor readiness fintech",
    "saas product strategy",
  ],

  authors: [{ name: "Rajeev" }],
  creator: "Rajeev",

  openGraph: {
    title: "Make Your Fintech Legible to Capital",
    description:
      "Metrics improve, but capital doesn’t follow. Fix gaps in product, narrative, and trust.",
    url: "https://arcadydesign.com",
    siteName: "Rajeev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fintech strategy and product clarity",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Make Your Fintech Legible to Capital",
    description:
      "Fix the hidden frictions in fintech products that slow growth and block investment.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://arcadydesign.com",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScrollProvider>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </SmoothScrollProvider>
    </html>
  );
}
