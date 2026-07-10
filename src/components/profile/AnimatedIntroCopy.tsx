"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";

export default function AnimatedIntroCopy() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        max-w-3xl
        oxanium
        mb-4
        border
        border-hud-cyan/40
        bg-hud-green/10
        p-4
        text-sm
        text-hud-muted
        uppercase
        transition-[filter,opacity,transform]
        duration-500

        ${
          isVisible
            ? "animate-hud-focus-in opacity-100 blur-0"
            : "translate-y-2 opacity-40 blur-sm"
        }
      `}
    >
      <p className="mb-4">
        <Terminal
          className={`
            mr-2
            inline
            h-5
            w-5
            text-hud-green
            ${isVisible ? "hud-flicker-pulse [--hud-effect-delay:950ms]" : ""}
          `}
        />
        Senior Frontend Engineer with{" "}
        <em
          className={`
            text-hud-green
            not-italic
            ${isVisible ? "hud-flicker-pulse [--hud-effect-delay:950ms]" : ""}
          `}
        >
          20+ years of experience
        </em>
        , including 10+ years building JavaScript and React applications.
      </p>

      <p>
        I design and build{" "}
        <em
          className={`
            text-hud-green
            not-italic
            ${isVisible ? "hud-flicker-pulse [--hud-effect-delay:1300ms]" : ""}
          `}
        >
          fast, maintainable interfaces
        </em>{" "}
        with clean UI, strong TypeScript, and{" "}
        <em
          className={`
            text-hud-green
            not-italic
            ${isVisible ? "hud-flicker-pulse [--hud-effect-delay:1650ms]" : ""}
          `}
        >
          pragmatic technical decisions
        </em>{" "}
        that keep products scalable and easy to evolve.
      </p>
    </div>
  );
}
