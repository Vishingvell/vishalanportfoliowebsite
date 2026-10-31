import Link from "next/link";
import { notFound } from "next/navigation";
import { validToken } from "@/src/lib/nfc";
import { profile } from "@/src/content/portfolio";
import { Well } from "@/components/Well";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Connect with Vishalan",
  robots: { index: false, follow: false, noarchive: true },
  referrer: "no-referrer" as const,
};
export default async function Tap({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  if (!validToken(token)) notFound();
  const phone = process.env.NFC_PHONE!;
  return (
    <main className="tap-page">
      <p className="eyebrow">A LITTLE CONNECTION</p>
      <h1>
        {profile.givenName} <em>({profile.nickname})</em>
      </h1>
      <p>Make a wish, or simply connect with Wish.</p>
      <Well>
        <div className="tap-actions">
          <a
            className="button"
            href={`/tap/${encodeURIComponent(token)}/contact`}
          >
            Save contact ↓
          </a>
          <a href={`tel:${phone}`}>Call {phone}</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <Link href="/">View portfolio ↗</Link>
        </div>
      </Well>
    </main>
  );
}
