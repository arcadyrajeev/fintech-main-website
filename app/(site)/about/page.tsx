import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title:
    "About Rajeev | Product Clarity Systems for Fintech & Operational Platforms",

  description:
    "Rajeev works with fintech and operational platforms to improve onboarding, product clarity, trust systems, dashboard UX, and narrative structure through operational UX and product strategy.",

  keywords: [
    "rajeev UX strategist",
    "product strategy consultant",
    "operational platform UX",
    "dashboard UX strategy",
    "product clarity systems",
    "trust systems UX",
    "onboarding UX consultant",
    "product narrative strategy",
    "workflow UX",
    "fintech UX strategy",
  ],

  openGraph: {
    title: "About Rajeev | Product Clarity Systems for Operational Platforms",

    description:
      "Operational UX systems, onboarding clarity, trust architecture, dashboard UX, and product narrative strategy for fintech and operational software.",

    url: "https://arcadydesign.com/about",

    siteName: "Arcady Design",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajeev - Product Clarity Systems",
      },
    ],

    type: "profile",
  },

  twitter: {
    card: "summary_large_image",

    title: "About Rajeev | Product Clarity Systems for Operational Platforms",

    description:
      "Helping fintech and operational platforms improve trust, onboarding, product clarity, and decision-oriented UX systems.",

    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://arcadydesign.com/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
