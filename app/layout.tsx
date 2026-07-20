import type { Metadata } from "next";
import { profile } from "@/src/content/portfolio";
import { getSiteUrl } from "@/src/lib/site-url";
import "./globals.css";

const title = `${profile.name} — Computer Science Student & Builder`;
const description = profile.introduction;
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "profile",
    title,
    description,
    siteName: profile.name,
    url: "/",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: `${profile.name} portfolio` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
