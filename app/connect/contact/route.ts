import { vcard, vcardHeaders } from "@/src/lib/vcard";
export function GET() {
  return new Response(vcard(), { headers: vcardHeaders });
}
