import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/free-ai-visibility-audit",
    "/audit-submitted",
    "/book",
    "/resources",
    "/resources/ai-search-shift",
    "/resources/automation-starter-kit",
    "/resources/traffic-no-customers"
  ];

  const now = new Date();
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now
  }));
}
