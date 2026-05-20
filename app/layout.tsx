import type { Metadata } from "next";

import "./globals.css";
import SmoothScrollProvider from "./utils/smoothScrollProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const siteUrl = "https://arcadydesign.com";

const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Product Clarity Systems for Fintech & Operational Platforms | Arcady",
    template: "%s | Arcady",
  },

  description:
    "We help fintech and operational platforms improve trust, onboarding, dashboard UX, and product clarity through operational UX systems and narrative strategy.",

  keywords: [
    "fintech UX",
    "dashboard UX",
    "product strategy",
    "operational platform UX",
    "product clarity systems",
    "trust systems",
    "fintech onboarding UX",
    "operational SaaS UX",
    "decision systems UX",
    "infrastructure product UX",
    "workflow UX",
    "analytics dashboard design",
    "product narrative strategy",
  ],

  authors: [{ name: "Rajeev" }],
  creator: "Rajeev",

  openGraph: {
    title: "Product Clarity Systems for Fintech & Operational Platforms",

    description:
      "UX systems, onboarding clarity, dashboard UX, and trust-focused product strategy for fintech and operational software.",

    url: siteUrl,

    siteName: "Arcady Design",

    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Product clarity systems for fintech and operational platforms",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Product Clarity Systems for Fintech & Operational Platforms",

    description:
      "Operational UX systems, onboarding clarity, dashboard UX, and trust-focused product strategy for fintech and complex software platforms.",

    images: [ogImage],

    creator: "@yourhandle",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteUrl,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "ProfessionalService",

              name: "Arcady - Product Clarity Systems for Fintech & Operational Platforms",

              url: siteUrl,

              description:
                "Operational UX systems, onboarding clarity, dashboard UX, trust systems, and narrative strategy for fintech and operational platforms.",

              areaServed: "Global",

              serviceType: [
                "Fintech UX Strategy",
                "Operational Platform UX",
                "Dashboard UX",
                "Onboarding UX",
                "Product Narrative Strategy",
                "Trust System Design",
              ],
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
