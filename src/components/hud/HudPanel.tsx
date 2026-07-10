import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import "./hud.css";

type HudPanelVariant = "cyan" | "green" | "pink";

type BaseHudPanelProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
  variant?: HudPanelVariant;
  shimmer?: boolean;
};

type HudPanelProps =
  | (BaseHudPanelProps & {
      asLink?: false;
      href?: never;
    })
  | (BaseHudPanelProps & {
      asLink: true;
      href: string;
    });

const variants: Record<HudPanelVariant, string> = {
  cyan: "var(--color-hud-cyan)",
  green: "var(--color-hud-green)",
  pink: "var(--color-hud-pink)",
};

export default function HudPanel({
  title,
  children,
  className = "",
  variant = "cyan",
  asLink = false,
  href,
  shimmer,
}: HudPanelProps) {
  const style = {
    "--border": variants[variant],
  } as CSSProperties;

  const classes = `
  hud-panel
  block
  bg-hud-panel/75
  transition-colors
  duration-200
  ${asLink ? "hud-panel-link hover:bg-hud-cyan/10!" : ""}
  
  ${className}
  backdrop-blur-xs
  shadow
`;

  const content = (
    <>
      {shimmer && <span className="hud-border-runner" aria-hidden="true" />}
      <div className="modal-scanline" />
      {title && (
        <h2 className="hud-title mb-4 border-b border-white/10 pb-2 text-sm text-hud-pink uppercase">
          {title}
        </h2>
      )}

      <div className="hud-content">{children}</div>
    </>
  );

  if (asLink && href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <section className={classes} style={style}>
      {content}
    </section>
  );
}
