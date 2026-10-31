"use client";
import { useState, type ReactNode } from "react";
export function Well({ children }: { children: ReactNode }) {
  const [dropped, setDropped] = useState(false);
  return (
    <div className={dropped ? "wish dropped" : "wish"}>
      <div className="well-scene">
        <button
          className="coin"
          type="button"
          onClick={() => setDropped(!dropped)}
          aria-label={
            dropped
              ? "Reset the wishing well"
              : "Drop a coin into the wishing well"
          }
        >
          ✦
        </button>
        <div className="well-roof" aria-hidden="true" />
        <div className="well-posts" aria-hidden="true" />
        <div className="well-water" aria-hidden="true">
          <span />
        </div>
        <div className="well-base" aria-hidden="true" />
        <span className="well-hint" role="status">
          {dropped
            ? "A little wish, sent your way."
            : "Tap the coin to make a wish"}
        </span>
      </div>
      {children}
    </div>
  );
}
