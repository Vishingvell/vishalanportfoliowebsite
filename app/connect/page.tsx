import Link from "next/link";
import { Header, Footer, ContactLinks } from "@/components/PortfolioSections";
export default function Connect() {
  return (
    <>
      <Header />
      <main className="wrap inner-page">
        <p className="eyebrow">CONNECT / SAY HELLO</p>
        <h1>
          Let’s <em>connect.</em>
        </h1>
        <p className="lead">
          I’m Vishalan, also known as Wish. It’s nice to meet you.
        </p>
        <ContactLinks />
        <a className="button" href="/connect/contact">
          Save public contact ↓
        </a>
        <p>
          <Link className="text-link" href="/">
            ← Back to portfolio
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
