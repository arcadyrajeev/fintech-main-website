import type { Metadata } from "next";

import "./globals.css";

import SmoothScrollProvider from "./utils/smoothScrollProvider";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const siteUrl = "https://arcadydesign.com";

const ogImage = `${siteUrl}/og-image.png`;

/* -------------------------------- */
/* ORGANIZATION SCHEMA */
/* -------------------------------- */

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: "Arcady",

  url: siteUrl,

  logo: `${siteUrl}/icon-512.png`,

  image: `${siteUrl}/icon-512.png`,

  description: "Product clarity systems for fintech and operational platforms.",

  foundingDate: "2025",

  areaServed: "Worldwide",

  sameAs: ["https://www.linkedin.com/company/arcady"],

  knowsAbout: [
    "Fintech UX",
    "Product Strategy",
    "Operational UX",
    "Onboarding Optimization",
    "Dashboard UX",
    "Behavioral Design",
    "Trust Systems",
    "Operational SaaS UX",
  ],
};

/* -------------------------------- */
/* WEBSITE SCHEMA */
/* -------------------------------- */

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "Arcady",

  url: siteUrl,

  description: "Product clarity systems for fintech and operational platforms.",

  publisher: {
    "@type": "Organization",

    name: "Arcady",
  },

  potentialAction: {
    "@type": "SearchAction",

    target: `${siteUrl}/blog?search={search_term_string}`,

    "query-input": "required name=search_term_string",
  },
};

/* -------------------------------- */
/* PROFESSIONAL SERVICE SCHEMA */
/* -------------------------------- */

const professionalServiceSchema = {
  "@context": "https://schema.org",

  "@type": "ProfessionalService",

  name: "Arcady - Product Clarity Systems for Fintech & Operational Platforms",

  url: siteUrl,

  image: ogImage,

  logo: `${siteUrl}/icon-512.png`,

  description:
    "Operational UX systems, onboarding clarity, dashboard UX, trust systems, and narrative strategy for fintech and operational platforms.",

  areaServed: "Worldwide",

  serviceType: [
    "Fintech UX Strategy",
    "Operational Platform UX",
    "Dashboard UX",
    "Onboarding UX",
    "Product Narrative Strategy",
    "Trust System Design",
    "Behavioral UX",
    "Activation Optimization",
  ],
};

/* -------------------------------- */
/* GLOBAL METADATA */
/* -------------------------------- */

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
    "fintech onboarding UX",
    "product clarity systems",
    "operational platform UX",
    "dashboard UX",
    "trust systems",
    "operational SaaS UX",
    "workflow UX",
    "behavioral UX",
    "activation optimization",
    "product strategy",
    "decision systems UX",
    "infrastructure product UX",
    "analytics dashboard design",
    "product narrative strategy",
  ],

  authors: [
    {
      name: "Rajeev",
    },
  ],

  creator: "Rajeev",

  publisher: "Arcady",

  applicationName: "Arcady",

  category: "Design & Product Strategy",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      "max-video-preview": -1,

      "max-image-preview": "large",

      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Product Clarity Systems for Fintech & Operational Platforms",

    description:
      "UX systems, onboarding clarity, dashboard UX, and trust-focused product strategy for fintech and operational software.",

    url: siteUrl,

    siteName: "Arcady",

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

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },

      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },

      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/icon-192.png",
      },
    ],

    shortcut: ["/favicon.ico"],
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
        {/* ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* PROFESSIONAL SERVICE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
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
