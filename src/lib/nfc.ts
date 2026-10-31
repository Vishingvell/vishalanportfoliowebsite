import "server-only";
import { timingSafeEqual } from "node:crypto";
export function validToken(token: string) {
  const expected = process.env.NFC_ACCESS_TOKEN;
  if (!expected || !process.env.NFC_PHONE) return false;
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
