import { useState } from "react";
import HudPanel from "../hud/HudPanel";
import { projects, type ProjectsItem } from "@/data/projects";
import Image from "next/image";
import Skill from "../ui/Skill";
import { CardSim, CirclePower } from "lucide-react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { colourVariants, type ColourVariant } from "@/lib/colourVariants";

type MissionLogProps = {
  variant: ColourVariant;
};

export default function MissionLog({ variant }: MissionLogProps) {
  const colours = colourVariants[variant];
  const [selectedItem, setSelectedItem] = useState<ProjectsItem | null>(null);
  return (
    <>
      <HudPanel title="_Mission Log" className="flex-grow" variant={variant}>
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`border ${colours.border} ${colours.bg} ${colours.text}
            flex
            flex-col
            gap-4
            transition
            lg:grid
            lg:grid-cols-[90px_1fr]
            lg:gap-0
            lg:p-0
            
      `}
            >
              <div
                className={`
              border-b
              ${colours.border}
              p-2
              text-xs
              ${colours.text}
              lg:border-r
              lg:border-b-0
              lg:p-4
              flex
              flex-col
              items-center
        `}
              >
                OP_00{index + 1}
                <span
                  className={`block py-2 text-left text-xs uppercase ${
                    project.status === "Complete"
                      ? colours.textBright
                      : colours.textDim
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <div
                className=" flex flex-col flex-grow lg:grid
              p-4 items-center lg:items-start
            lg:grid-cols-[1fr_auto]
            lg:gap-0
            lg:p-0"
              >
                <div className="lg:p-4">
                  <h2
                    className={`text-sm font-bold! ${colours.textBright} uppercase`}
                  >
                    {project.codename}
                  </h2>

                  <p className="oxanium mb-2 text-sm">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-1">
                    {project.stack.map((item) => (
                      <Skill key={item} title={item} />
                    ))}
                  </div>
                </div>
                <div
                  className="
                // w-48 
            relative
            aspect-square
            overflow-hidden

            sm:max-w-64
            lg:h-48
            lg:w-48
           
            
          "
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    title={project.href}
                    className="oxanium break-all text-xs text-hud-pink uppercase transition duration-300 hover:text-hud-pink-dark relative"
                  >
                    <Image
                      src={project.avatar}
                      alt={`${project.title} cyberpunk avatar`}
                      priority={index === 0}
                      className="object-cover"
                      width={192}
                      height={192}
                    />
                  </a>
                </div>
              </div>
              <div className="lg:grid-cols-1 col-span-2 p-4 lg:border-t lg:border-hud-secondary-dim/30 flex justify-between">
                <div className="grid grid-cols-[32px_1fr] items-center">
                  <CardSim className="inline mr-1 text-hud-pink" />
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    title={project.href}
                    className="oxanium break-all text-xs text-hud-pink uppercase transition duration-300 hover:text-hud-pink-dark"
                  >
                    {project.vanityLink}
                  </a>
                </div>
                {/* <Button
                  onClick={() => setSelectedItem(project)}
                  type="button"
                  variant={variant}
                >
                  [Read Brief]
                </Button> */}
              </div>
            </article>
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
              variant={variant}
              className="operation-modal relative h-full min-h-0 w-full overflow-hidden"
            >
              <button
                type="button"
                aria-label="Close mission file"
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

              <div className="flex h-full min-h-0 flex-col"></div>
            </HudPanel>
          </div>
        )}
      </Modal>
    </>
  );
}
