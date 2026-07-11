"use client";

import { type CSSProperties, useState } from "react";
import { CirclePower } from "lucide-react";

import HudPanel from "@/components/hud/HudPanel";
import Modal from "@/components/ui/Modal";
import GlitchText from "@/components/effects/GlitchText";
import { experience, type ExperienceItem } from "@/data/experience";

export default function OperationHistory() {
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  const miniPanelStyle = {
    "--border": "var(--color-hud-green)",
  } as CSSProperties;

  return (
    <>
      <HudPanel
        title="_Operation History"
        variant="green"
        className="flex-grow"
      >
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
      <Modal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <div className="modal-panel-in relative h-full min-h-0 w-full">
            <div className="modal-scanline-overlay" aria-hidden="true" />

            <HudPanel
              variant="green"
              className="operation-modal relative h-full min-h-0 w-full overflow-hidden"
            >
              <button
                type="button"
                aria-label="Close operation file"
                onClick={() => setSelectedItem(null)}
                className="
            absolute
            right-2
            top-2
            z-20
            cursor-pointer
            p-2
            text-hud-muted
            transition
            hover:text-hud-green
          "
              >
                <CirclePower />
              </button>

              <div className="flex h-full min-h-0 flex-col">
                <div className="shrink-0">
                  <p className="text-xs uppercase tracking-[0.3em] text-hud-green">
                    Operation File
                  </p>

                  <h2 id="operation-modal-title" className="mt-2">
                    <GlitchText
                      text={selectedItem.company}
                      className="text-4xl uppercase text-hud-cyan"
                    />
                  </h2>

                  <p className="mt-2 text-sm text-hud-muted oxanium">
                    {selectedItem.location} / / {selectedItem.period}
                  </p>
                </div>

                <div className="modal-body-reveal flex min-h-0 flex-1 flex-col">
                  <div className="modal-reveal-section mt-6 shrink-0 border-t border-white/10 pt-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-hud-muted">
                      Assigned Role
                    </p>

                    <p className="mt-2 text-xl uppercase text-hud-green oxanium">
                      {selectedItem.role}
                    </p>
                  </div>

                  <div className="modal-reveal-section mt-6 shrink-0">
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

                  <div className="modal-reveal-section mt-6 flex min-h-0 flex-1 flex-col pb-2">
                    <p className="shrink-0 text-xs uppercase tracking-[0.25em] text-hud-muted">
                      Field Notes
                    </p>

                    <div
                      className="
                  mt-4
                  min-h-0
                  flex-1
                  touch-pan-y
                  overflow-y-auto
                  overscroll-contain
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
              </div>
            </HudPanel>
          </div>
        )}
      </Modal>
    </>
  );
}
