import { profile } from "@/src/content/portfolio";

export function getSiteUrl(): string {
  const canonicalUrl: string = profile.canonicalUrl;
  if (canonicalUrl) return canonicalUrl.replace(/\/$/, "");

  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

  return vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000";
}
