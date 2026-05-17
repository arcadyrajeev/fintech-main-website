import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arcady Design",
    short_name: "Arcady",

    description:
      "Product clarity systems for fintech and operational platforms. UX systems, onboarding clarity, dashboard UX, trust architecture, and operational product strategy.",

    start_url: "/",

    display: "standalone",

    background_color: "#f5f5f5",

    theme_color: "#0f172a",

    categories: ["business", "design", "productivity", "finance", "technology"],

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },

      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
