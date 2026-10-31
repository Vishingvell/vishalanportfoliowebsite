import { validToken } from "@/src/lib/nfc";
import { vcard, vcardHeaders } from "@/src/lib/vcard";
export const dynamic = "force-dynamic";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  if (!validToken(token))
    return new Response("Not found", { status: 404, headers: vcardHeaders });
  return new Response(vcard(process.env.NFC_PHONE), { headers: vcardHeaders });
}
