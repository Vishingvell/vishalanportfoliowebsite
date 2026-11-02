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
