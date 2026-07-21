import { CSSProperties } from "react";
import { colourVariants, type ColourVariant } from "@/lib/colourVariants";

type HeartRateVariant = ColourVariant;

type HeartRateProps = {
  bpm?: number;
  label?: string;
  variant?: HeartRateVariant;
  className?: string;
};

export default function HeartRate({
  bpm = 72,
  label = "Pulse",
  variant = "primary",
  className = "",
}: HeartRateProps) {
  const colours = colourVariants[variant];
  const style = {
    "--heart-rate-color": colours.cssVar,
  } as CSSProperties;

  return (
    <div
      className={`heart-rate ${className} block w-12`}
      style={style}
      aria-label={`${label}: ${bpm} beats per minute`}
    >
      <div className="heart-rate-header">
        <span className="heart-rate-dot" />
        <span>{label}</span>
        <span className="heart-rate-bpm">{bpm} BPM</span>
      </div>

      <svg
        className="heart-rate-svg"
        viewBox="0 0 220 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g className="heart-rate-line">
          <path d="M0 24 H28 L34 24 L40 8 L48 34 L56 24 H92 L100 24 L106 14 L112 24 H220" />
          <path
            d="M0 24 H28 L34 24 L40 8 L48 34 L56 24 H92 L100 24 L106 14 L112 24 H220"
            transform="translate(220 0)"
          />
        </g>
      </svg>
    </div>
  );
}
