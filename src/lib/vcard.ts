import "server-only";
import { profile } from "@/src/content/portfolio";
import { getSiteUrl } from "./site-url";
function escape(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}
export function vcard(phone?: string) {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escape(profile.name)}`,
    `N:${escape(profile.familyName)};${escape(profile.givenName)};;;`,
    `NICKNAME:${profile.nickname}`,
    ...(phone ? [`TEL;TYPE=CELL:${escape(phone)}`] : []),
    `EMAIL;TYPE=INTERNET:${profile.email}`,
    `URL:${getSiteUrl()}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${profile.linkedinUrl}`,
    `X-SOCIALPROFILE;TYPE=github:${profile.github.url}`,
    "END:VCARD",
    "",
  ];
  return lines
    .map((line) => line.match(/.{1,73}/gu)?.join("\r\n ") ?? "")
    .join("\r\n");
}
export const vcardHeaders = {
  "Content-Type": "text/vcard; charset=utf-8",
  "Content-Disposition": "attachment; filename=Vishalan-Karunanithi.vcf",
  "Cache-Control": "private, no-store",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
  "Referrer-Policy": "no-referrer",
};
