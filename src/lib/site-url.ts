import { profile } from "@/src/content/portfolio";

export function getSiteUrl(): string {
  if (profile.canonicalUrl) return profile.canonicalUrl.replace(/\/$/, "");

  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

  return vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000";
}
