import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import "./hud.css";
import { colourVariants, type ColourVariant } from "@/lib/colourVariants";

type BaseHudPanelProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
  variant?: ColourVariant;
  shimmer?: boolean;
  effectsDetail?: ReactNode;
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

export type HudPanelVariant = ColourVariant;

export default function HudPanel({
  title,
  children,
  className = "",
  variant = "secondary",
  asLink = false,
  href,
  shimmer,
  effectsDetail,
}: HudPanelProps) {
  const colours = colourVariants[variant];
  const style = {
    "--border": colours.cssVar,
  } as CSSProperties;

  const classes = `
  hud-panel
  block
  border
  ${colours.borderDim}
  ${colours.bgDim}
  ${asLink ? `hud-panel-link hover:bg-${variant}}/10!` : ""}
  ${className}
  backdrop-blur-xs
  shadow
  transition-colors
  duration-200
`;

  const content = (
    <>
      {shimmer && <span className="hud-border-runner" aria-hidden="true" />}
      <div className="modal-scanline" />
      <header className="mb-4 border-b border-white/10 pb-2 flex flex-row items-center justify-between">
        {title && (
          <h2 className={`hud-title  text-sm uppercase ${colours.text}`}>
            {title}
          </h2>
        )}
        {effectsDetail && (
          <div className="hud-effects-detail">{effectsDetail}</div>
        )}
      </header>

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
