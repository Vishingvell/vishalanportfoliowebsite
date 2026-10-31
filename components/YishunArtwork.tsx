"use client";
import { useId, useState } from "react";
export function YishunArtwork() {
  const id = useId().replace(/:/g, "");
  const [replay, setReplay] = useState(0);
  return (
    <figure className="yishun-artwork">
      <svg
        key={replay}
        className="yishun-scene"
        viewBox="0 0 1536 1024"
        role="img"
        aria-labelledby={`${id}-title ${id}-desc`}
      >
        <title id={`${id}-title`}>Yishun MRT, in ink and sunset</title>
        <desc id={`${id}-desc`}>
          A fine ink drawing of Yishun MRT station’s tiled roof, train, entrance
          and bicycle parking, painted with spreading peach, amber and violet
          watercolour washes.
        </desc>
        <defs>
          <filter
            id={`${id}-edge`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".025"
              numOctaves="3"
              seed="7"
              result="grain"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="grain"
              scale="65"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask
            id={`${id}-paint`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1536"
            height="1024"
          >
            <g fill="white" filter={`url(#${id}-edge)`}>
              <circle
                className="paint-bloom bloom-one"
                cx="400"
                cy="600"
                r="1800"
              />
              <circle
                className="paint-bloom bloom-two"
                cx="1200"
                cy="300"
                r="1800"
              />
              <circle
                className="paint-bloom bloom-three"
                cx="850"
                cy="850"
                r="1800"
              />
            </g>
          </mask>
        </defs>
        <image
          className="ink-drawing"
          href="/art/yishun-ink.webp"
          width="1536"
          height="1024"
        />
        <image
          href="/art/yishun-sunset.webp"
          width="1536"
          height="1024"
          mask={`url(#${id}-paint)`}
        />
      </svg>
      <figcaption>
        <span>
          YISHUN MRT <span aria-hidden="true">/</span> INK &amp; SUNSET
        </span>
        <button
          type="button"
          onClick={() => setReplay(replay + 1)}
          aria-label="Replay the Yishun MRT painting animation"
        >
          Paint again ↻
        </button>
      </figcaption>
      <details className="art-credit">
        <summary>Artwork credits</summary>
        <p>
          Ink and watercolour adaptation of a{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:NS13_Yishun_MRT_Station_Exit_A_202411.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yishun MRT photograph by Fanz226
          </a>
          . Reinterpreted with AI-assisted drawing and sunset colours.
          Illustration licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-SA 4.0
          </a>
          .
        </p>
      </details>
    </figure>
  );
}
