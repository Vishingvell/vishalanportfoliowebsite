import type { Metadata } from "next";
import { profile } from "@/src/content/portfolio";
import { getSiteUrl } from "@/src/lib/site-url";
import "./globals.css";
export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.introduction,
  metadataBase: new URL(getSiteUrl()),
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
