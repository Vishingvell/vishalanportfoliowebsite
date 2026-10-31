"use client";
import { useState, type ReactNode } from "react";
export function Well({ children }: { children: ReactNode }) {
  const [dropped, setDropped] = useState(false);
  return (
    <div className={dropped ? "wish dropped" : "wish"}>
      <div className="well-scene card-well">
        <svg
          viewBox="0 0 320 340"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M32 95 105 26 252 18 303 94 269 99 251 47 197 103Z"
            fill="white"
          />
          <path d="m105 26 92 77 55-85M45 82l233-8M62 65l204-9M83 45l174-9M86 64l17-22M143 61l18-23M204 57l17-23M60 83l18-20M120 80l18-20M179 78l18-20M237 75l15-18" />
          <path
            d="m84 102 4 135 14 4-1-138M250 101l-2 139 15-5 4-136M90 120l22-17M247 126l-22-24"
            fill="white"
          />
          <ellipse cx="167" cy="250" rx="126" ry="35" fill="white" />
          <path d="M41 250v49c0 45 252 45 252 0v-49" fill="white" />
          <ellipse
            className="ink-well-water"
            cx="167"
            cy="250"
            rx="104"
            ry="23"
            fill="#151515"
          />
          <ellipse
            className="card-ripple"
            cx="167"
            cy="250"
            rx="50"
            ry="10"
            stroke="white"
          />
          <path d="M43 270c45 35 205 35 249 0M48 296c50 30 186 30 239 0M83 275v22M132 284v24M192 284v24M247 275v22M108 305v19M218 305v19M47 319l-19-27 11 34-27-9 23 18M288 321l16-31-6 37 14-9-13 17" />
          <path
            d="m54 165 4 9 9 3-9 3-4 10-3-10-9-3 9-3Zm233 5 4 10 10 4-10 3-4 10-3-10-10-3 10-4Z"
            fill="currentColor"
          />
        </svg>
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
      <div id="wish-contact-details" hidden={!dropped}>
        {children}
      </div>
      <noscript>
        <p>Enable JavaScript to drop the coin and open this card.</p>
      </noscript>
    </div>
  );
}
