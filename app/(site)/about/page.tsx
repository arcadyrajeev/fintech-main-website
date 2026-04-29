import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Rajeev | Fintech Product & Narrative Strategy",

  description:
    "Rajeev works with fintech founders to align product, narrative, and trust so businesses are understood clearly by users, investors, and the market.",

  keywords: [
    "rajeev fintech",
    "fintech consultant india",
    "product strategy fintech",
    "startup narrative strategy",
    "fintech UX strategy",
  ],

  openGraph: {
    title: "About Rajeev | Fintech Strategy",
    description: "Product, narrative, and trust alignment for fintech systems.",
    url: "https://arcadydesign.com/about",
    siteName: "Rajeev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajeev - Fintech Strategy",
      },
    ],
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Rajeev | Fintech Strategy",
    description:
      "Helping fintech teams resolve clarity gaps that slow decisions.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://arcadydesign.com/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
