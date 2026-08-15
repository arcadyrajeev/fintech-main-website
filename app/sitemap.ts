import { MetadataRoute } from "next";

import fs from "fs";
import path from "path";

const SITE_URL = "https://arcadydesign.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogDir = path.join(process.cwd(), "content/blog");

  const blogFiles = fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"));

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/blog",

    "/services/brand",
    "/services/narrative",
    "/services/onboarding",
    "/services/product",
    "/services/website",

    "/case-studies",
    "/case-studies/brokerquant",
    "/case-studies/clarity1",
    "/case-studies/closexpay",
    "/case-studies/copeek",
    "/case-studies/realestify",
    "/case-studies/rupeeflow",
    "/case-studies/rupeeflow-pitch-design",
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,

    lastModified: new Date(),

    changeFrequency:
      route === ""
        ? "weekly"
        : route.startsWith("/blog")
          ? "weekly"
          : "monthly",

    priority:
      route === ""
        ? 1
        : route.startsWith("/services")
          ? 0.9
          : route.startsWith("/case-studies")
            ? 0.8
            : 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogFiles.map((file) => {
    const slug = file.replace(".md", "");

    const fullPath = path.join(blogDir, file);

    const stats = fs.statSync(fullPath);

    return {
      url: `${SITE_URL}/blog/${slug}`,

      lastModified: stats.mtime,

      changeFrequency: "monthly",

      priority: 0.7,
    };
  });

  return [...staticPages, ...blogPages];
}
