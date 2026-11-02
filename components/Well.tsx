"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
export function Well({ children }: { children: ReactNode }) {
  const [dropped, setDropped] = useState(false);
  const contactRegion = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!dropped) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(
      () => {
        const heading = contactRegion.current?.querySelector<HTMLElement>("h2");
        heading?.focus({ preventScroll: true });
        heading?.scrollIntoView({
          behavior: reducedMotion ? "instant" : "smooth",
          block: "start",
        });
      },
      reducedMotion ? 0 : 700,
    );
    return () => window.clearTimeout(timer);
  }, [dropped]);
  return (
    <div className={dropped ? "wish dropped" : "wish"}>
      <div className="well-scene card-well">
        <span className="well-colour-bloom" aria-hidden="true" />
        <Image
          className="well-illustration"
          src="/art/wish-well-ink.webp"
          width={480}
          height={480}
          alt=""
          sizes="(max-width: 380px) 240px, 304px"
          priority
        />
        <svg className="well-pigment" viewBox="0 0 640 640" aria-hidden="true">
          <defs>
            <linearGradient id="roof-wash" x2="0.8" y2="1"><stop stopColor="#efbb85"/><stop offset="1" stopColor="#b96150"/></linearGradient>
            <linearGradient id="stone-wash" x2="0.3" y2="1"><stop stopColor="#f7c391"/><stop offset="1" stopColor="#a58bb7"/></linearGradient>
          </defs>
          <path fill="url(#roof-wash)" d="M100 204 210 83 496 43 407 196Z M496 43 575 207 559 211 493 88Z"/>
          <path fill="#cc9a74" d="M185 212 222 207 222 408 190 414Z M459 126 489 80 493 418 456 429Z"/>
          <path fill="url(#stone-wash)" d="M137 411Q138 355 325 360Q529 361 531 413L526 548Q504 598 323 601Q168 595 137 552Z"/>
          <ellipse fill="#8d7ba6" cx="331" cy="421" rx="116" ry="20"/>
        </svg>
        <span className="well-surface-ripple" aria-hidden="true" />
        <button
          className="coin"
          type="button"
          onClick={() => setDropped(true)}
          disabled={dropped}
          aria-label="Tap / click me to reveal contact details"
          aria-expanded={dropped}
          aria-controls="wish-contact-details"
        >
          <span className="coin-prompt" aria-hidden="true">
            Tap / click me ↓
          </span>
          <span aria-hidden="true">✦</span>
        </button>
      </div>
      <p className="well-hint" role="status">
        {dropped
          ? "Your wish is in. Let’s connect."
          : "Tap the coin to connect with Wish."}
      </p>
      <div id="wish-contact-details" ref={contactRegion} hidden={!dropped}>
        {children}
      </div>
      <noscript>
        <p>Enable JavaScript to drop the coin and open this card.</p>
      </noscript>
    </div>
  );
}
