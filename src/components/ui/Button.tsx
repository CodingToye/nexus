"use client";

import { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";
import "./button.css";
import { colourVariants, type ColourVariant } from "@/lib/colourVariants";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ColourVariant;
};

export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  style,
  ...props
}: ButtonProps) {
  const colours = colourVariants[variant];
  const buttonStyle = {
    ...style,
    "--button-colour": colours.cssVar,
    "--button-colour-dim": colours.cssVarDim,
    "--button-colour-bright": colours.cssVarBright,
  } as CSSProperties;
  return (
    <button
      type={type}
      className={`button inline-block border text-white py-2 px-4 text-xs shadow-2xl backdrop-blur-sm cursor-pointer transition ${colours.hoverBg} ${className} `}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
}
7;
