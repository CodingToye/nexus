import { CSSProperties } from "react";

type ComputerFanVariant = "primary" | "secondary";

type ComputerFanProps = {
  variant?: ComputerFanVariant;
  speed?: "slow" | "normal" | "fast";
  className?: string;
  label?: string;
};

const variants: Record<ComputerFanVariant, string> = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
};

const speeds = {
  slow: "5.5s",
  normal: "3.2s",
  fast: "2.1s",
};

export default function ComputerFan({
  variant = "primary",
  speed = "normal",
  className = "",
  label = "Cooling fan active",
}: ComputerFanProps) {
  const style = {
    "--fan-color": variants[variant],
    "--fan-speed": speeds[speed],
  } as CSSProperties;

  return (
    <div
      className={`computer-fan ${className} opacity-50   `}
      style={style}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect
          x="8"
          y="8"
          width="48"
          height="48"
          rx="6"
          className="computer-fan-frame"
        />

        <circle cx="32" cy="32" r="19" className="computer-fan-ring" />

        <g className="computer-fan-blades">
          <path d="M32 30 C42 18 52 23 47 32 C43 39 35 36 32 34 Z" />
          <path d="M34 32 C46 42 41 52 32 47 C25 43 28 35 30 32 Z" />
          <path d="M32 34 C22 46 12 41 17 32 C21 25 29 28 32 30 Z" />
          <path d="M30 32 C18 22 23 12 32 17 C39 21 36 29 34 32 Z" />
        </g>

        <circle cx="32" cy="32" r="5" className="computer-fan-hub" />

        <circle cx="14" cy="14" r="2" className="computer-fan-screw" />
        <circle cx="50" cy="14" r="2" className="computer-fan-screw" />
        <circle cx="14" cy="50" r="2" className="computer-fan-screw" />
        <circle cx="50" cy="50" r="2" className="computer-fan-screw" />
      </svg>
    </div>
  );
}
