"use client";

import { type CSSProperties, useState } from "react";
import { CirclePower } from "lucide-react";

import HudPanel from "@/components/hud/HudPanel";
import Modal from "@/components/ui/Modal";
import GlitchText from "@/components/effects/GlitchText";
import FakePanel from "../effects/FakePanel";
import Skill from "../ui/Skill";
import { fakePanelsContent } from "../effects/FakePanel";
import { experience, type ExperienceItem } from "@/data/experience";
import { colourVariants, type ColourVariant } from "@/lib/colourVariants";

type OperationHistoryProps = {
  variant: ColourVariant;
};

export default function OperationHistory({ variant }: OperationHistoryProps) {
  const colours = colourVariants[variant];
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  const miniPanelStyle = {
    "--border": colours.cssVar,
  } as CSSProperties;

  return (
    <>
      <HudPanel title="_Operation History" variant={variant} className="h-full">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              style={miniPanelStyle}
              className={`
                hud-panel
                block
                h-32
                cursor-pointer
                bg-black/75
                text-left
                backdrop-blur-xs
                transition-all
                duration-200
              `}
            >
              <span
                className={`block border-b border-white/10 pb-2 text-sm uppercase oxanium ${colours.text}`}
              >
                _{item.company}
              </span>

              <span className={`mt-4 block text-sm oxanium ${colours.textDim}`}>
                {item.period}
              </span>

              <span
                className={`mt-2 block text-xs uppercase tracking-widest oxanium ${colours.textBright}`}
              >
                {item.location}
              </span>
            </button>
          ))}
          <div className="grid grid-cols-2 gap-4">
            {fakePanelsContent.map((panel, index) => (
              <FakePanel
                key={index}
                title={panel.title}
                entries={panel.entries}
                duration={panel.duration}
              />
            ))}
          </div>
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
              variant={variant}
              className="operation-modal relative h-full min-h-0 w-full overflow-hidden"
            >
              <button
                type="button"
                aria-label="Close operation file"
                onClick={() => setSelectedItem(null)}
                className={`
            absolute
            right-2
            top-2
            z-20
            cursor-pointer
            p-2
            ${colours.text}
            transition
            hover:${colours.textBright}
          `}
              >
                <CirclePower />
              </button>

              <div className="flex h-full min-h-0 flex-col">
                <div className="shrink-0">
                  <p
                    className={`text-xs uppercase tracking-[0.3em] ${colours.text}`}
                  >
                    Operation File
                  </p>

                  <h2 id="operation-modal-title" className="mt-2">
                    <GlitchText
                      text={selectedItem.company}
                      className={`text-4xl uppercase ${colours.text}`}
                    />
                  </h2>

                  <p className={`mt-2 text-sm oxanium ${colours.textBright}`}>
                    {selectedItem.location} / / {selectedItem.period}
                  </p>
                </div>

                <div
                  className={`modal-body-reveal flex min-h-0 flex-1 flex-col ${colours.text}`}
                >
                  <div className="modal-reveal-section mt-6 shrink-0 border-t border-white/10 pt-6">
                    <p
                      className={`text-xs uppercase tracking-[0.25em] ${colours.textBright}`}
                    >
                      Assigned Role
                    </p>

                    <p className="mt-2 text-xl uppercase text-tertiary oxanium">
                      {selectedItem.role}
                    </p>
                  </div>

                  <div className="modal-reveal-section mt-6 shrink-0">
                    <p
                      className={`text-xs uppercase tracking-[0.25em] ${colours.textBright}`}
                    >
                      Loadout
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedItem.stack.map((item) => (
                        <Skill key={item} title={item} />
                      ))}
                    </div>
                  </div>

                  <div className="modal-reveal-section mt-6 flex min-h-0 flex-1 flex-col pb-2">
                    <p
                      className={`text-xs uppercase tracking-[0.25em] ${colours.textBright}`}
                    >
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
                  [scrollbar-color:var(--color-tertiary)_transparent]
                  [scrollbar-width:thin]
                "
                    >
                      <ul
                        className={`space-y-3 text-sm leading-6 oxanium ${colours.text}`}
                      >
                        {selectedItem.summary.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span>&gt;</span>
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
