import type { Metadata } from "next";

import "./globals.css";
import SmoothScrollProvider from "./utils/smoothScrollProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcadydesign.com"),

  title: {
    default: "Fintech Product & Narrative Strategy | Arcady",
    template: "%s | Arcady",
  },

  description:
    "Fintech product strategy to fix onboarding friction, trust gaps, and positioning so users commit, investors understand, and growth compounds.",

  authors: [{ name: "Rajeev" }],
  creator: "Rajeev",

  openGraph: {
    title: "Make Your Fintech Legible to Capital",
    description:
      "Fix onboarding friction, trust gaps, and positioning issues that block conviction and capital.",
    url: "https://arcadydesign.com",
    siteName: "Arcady Design Fintech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fintech product and narrative strategy",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fintech Strategy | Arcady",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Arcady - Fintech Product & Narrative Strategy",
              url: "https://arcadydesign.com",
              description:
                "Fintech product strategy focused on onboarding, trust, and narrative clarity.",
              areaServed: "Global",
            }),
          }}
        />

        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
