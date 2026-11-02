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
      <div className="card-topline">
        <span className="card-wordmark" aria-hidden="true">
          W.
        </span>
        <p className="eyebrow">A LITTLE CONNECTION</p>
        <span className="card-star" aria-hidden="true">
          ✳
        </span>
      </div>
      <header className="tap-intro">
        <h1>
          {profile.givenName} <em>({profile.nickname})</em>
        </h1>
        <p>
          You throw a coin into a wishing well to make a wish.
          <br />
          <span>Or just connect with Wish.</span>
        </p>
      </header>
      <Well>
        <section
          className="revealed-contacts"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" tabIndex={-1}>
            Let’s stay in touch.
          </h2>
          <div className="tap-actions">
            <ContactAction
              href={`/tap/${encodeURIComponent(token)}/contact`}
              symbol="↓"
              title="Save contact"
              detail="Keep my details with you"
              primary
            />
            <ContactAction
              href={`tel:${phone}`}
              symbol="☎︎"
              title="Call Wish"
              detail={phone}
            />
            <ContactAction
              href={`mailto:${profile.email}`}
              symbol="@"
              title="Email"
              detail="Send me a note"
            />
            <ContactAction
              href={profile.linkedinUrl}
              symbol="in"
              title="LinkedIn"
              detail="Stay connected"
            />
            <ContactAction
              href={profile.github.url}
              symbol="⌘"
              title="GitHub"
              detail="Explore my code"
            />
            <ContactAction
              href="/"
              symbol="↗"
              title="Portfolio"
              detail="See my work"
            />
          </div>
        </section>
      </Well>
      <p className="card-signoff">
        <span aria-hidden="true">—</span> A coin, a ripple, a conversation.
      </p>
    </main>
  );
}
function ContactAction({
  href,
  symbol,
  title,
  detail,
  primary = false,
}: {
  href: string;
  symbol: string;
  title: string;
  detail: string;
  primary?: boolean;
}) {
  const external = href.startsWith("https://");
  return (
    <a
      className={`contact-action${primary ? " contact-primary" : ""}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span className="contact-symbol" aria-hidden="true">
        {symbol}
      </span>
      <span className="contact-copy">
        <strong>{title}</strong>
        <small>{detail}</small>
      </span>
      <span className="contact-arrow" aria-hidden="true">
        {primary ? "↓" : "↗"}
      </span>
    </a>
  );
}
