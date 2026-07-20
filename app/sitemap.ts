import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/src/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: getSiteUrl(), changeFrequency: "monthly", priority: 1 }];
}
