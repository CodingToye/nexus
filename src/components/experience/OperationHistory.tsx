"use client";

import { CSSProperties, useEffect, useState } from "react";
import HudPanel from "@/components/hud/HudPanel";
import { experience, type ExperienceItem } from "@/data/experience";
import GlitchText from "../effects/GlitchText";
import { CirclePower } from "lucide-react";

export default function OperationHistory() {
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  useEffect(() => {
    if (!selectedItem) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [selectedItem]);

  const miniPanelStyle = {
    "--border": "var(--color-hud-green)",
  } as CSSProperties;

  return (
    <>
      <HudPanel title="_Operation History" variant="green">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              style={miniPanelStyle}
              className="
                hud-panel
                block
                min-h-32
                cursor-pointer
                bg-hud-panel/75
                text-left
                backdrop-blur-xs
                transition-all
                duration-200
                hover:bg-hud-green/10
                focus:outline-none
                focus:ring-2
                focus:ring-hud-green
                focus:ring-offset-2
                focus:ring-offset-black
              "
            >
              <span className="block border-b border-white/10 pb-2 text-sm uppercase text-hud-green oxanium">
                _{item.company}
              </span>

              <span className="mt-4 block text-sm text-hud-text oxanium">
                {item.period}
              </span>

              <span className="mt-2 block text-xs uppercase tracking-widest text-hud-muted oxanium">
                {item.location}
              </span>
            </button>
          ))}
        </div>
      </HudPanel>

      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="
          modal-backdrop-in
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/75
            p-4
            backdrop-blur-sm
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedItem(null);
            }
          }}
        >
          <div className="modal-panel-in relative w-full max-w-4xl">
            <div className="modal-scanline-overlay" aria-hidden="true" />
            <HudPanel
              variant="green"
              className="max-h-[80vh] overflow-hidden relative"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="
                    cursor-pointer
                    px-3
                    py-1
                    text-sm
                    uppercase
                    text-hud-muted
                    transition
                    
                    hover:text-hud-green
                    oxanium
                    absolute
                    -top-4
                    -right-4
                  "
              >
                <CirclePower />
              </button>
              <div className="">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-hud-green">
                    Operation File
                  </p>

                  <h2 className="mt-2">
                    <GlitchText
                      text={selectedItem.company}
                      className="text-4xl uppercase text-hud-cyan"
                    />
                  </h2>

                  <p className="mt-2 text-sm text-hud-muted oxanium">
                    {selectedItem.location} / / {selectedItem.period}
                  </p>
                </div>
              </div>
              <div className="modal-body-reveal">
                <div className="modal-reveal-section mt-6 border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-hud-muted">
                    Assigned Role
                  </p>

                  <p className="mt-2 text-xl uppercase text-hud-green oxanium">
                    {selectedItem.role}
                  </p>
                </div>

                <div className="modal-reveal-section mt-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-hud-muted">
                    Loadout
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedItem.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                        border
                        border-hud-green/40
                        px-3
                        py-1
                        text-xs
                        uppercase
                        tracking-wider
                        text-hud-green
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-reveal-section mt-6 min-h-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-hud-muted">
                    Field Notes
                  </p>

                  <div
                    className="
                    mt-4
                    max-h-[28vh]
                    overflow-y-auto
                    pr-3
                    [scrollbar-color:var(--color-hud-green)_transparent]
                    [scrollbar-width:thin]
                  "
                  >
                    <ul className="space-y-3 text-sm leading-6 text-hud-text/85 oxanium">
                      {selectedItem.summary.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="text-hud-green">&gt;</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </HudPanel>
          </div>
        </div>
      )}
    </>
  );
}
