import { CSSProperties } from "react";
import { Heart } from "lucide-react";

type HeartRateVariant = "green" | "cyan" | "pink";

type HeartRateProps = {
  bpm?: number;
  label?: string;
  variant?: HeartRateVariant;
  className?: string;
};

const variants: Record<HeartRateVariant, string> = {
  green: "var(--color-hud-green)",
  cyan: "var(--color-hud-cyan)",
  pink: "var(--color-hud-pink)",
};

export default function HeartRate({
  bpm = 72,
  label = "Pulse",
  variant = "green",
  className = "",
}: HeartRateProps) {
  const style = {
    "--heart-rate-color": variants[variant],
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
        <Heart className="heart-animation" />
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
