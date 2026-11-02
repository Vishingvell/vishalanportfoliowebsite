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
        <title id={`${id}-title`}>Taken in Yishun — ink and sunset</title>
        <desc id={`${id}-desc`}>
          An ink and watercolour interpretation of my photograph taken in
          Yishun: silhouetted railings and a wire fence frame a dramatic sky,
          painted with spreading peach, terracotta and dusky violet sunset
          washes.
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
          href="/art/yishun-personal-ink.webp"
          width="1536"
          height="1024"
        />
        <image
          href="/art/yishun-personal-sunset.webp"
          width="1536"
          height="1024"
          mask={`url(#${id}-paint)`}
        />
      </svg>
      <figcaption>
        <span>
          TAKEN IN YISHUN <span aria-hidden="true">/</span> FROM MY CAMERA
        </span>
        <button
          type="button"
          onClick={() => setReplay((value) => value + 1)}
          aria-label="Replay the Yishun sunset painting animation"
        >
          Paint again ↻
        </button>
      </figcaption>
      <p className="photo-origin">
        An ink &amp; wash interpretation of my own photograph.
      </p>
    </figure>
  );
}
