import HudPanel from "../hud/HudPanel";
import { projects } from "@/data/projects";
import Image from "next/image";
import Skill from "../ui/Skill";
import { CardSim } from "lucide-react";

export default function MissionLog({}) {
  return (
    <HudPanel title="_Mission Log" className="flex-grow">
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="
        border
        border-hud-cyan-dim/30
        bg-hud-panel/50

        flex
        flex-col
        gap-4
        p-3

        lg:grid
        lg:grid-cols-[90px_1fr_12rem]
        lg:gap-0
        lg:p-0
        lg:px-4
      "
          >
            <div
              className="
          border-b
          border-hud-cyan-dim/30
          pb-3
          text-xs
          text-hud-cyan/40

          lg:border-r
          lg:border-b-0
          lg:p-2
        "
            >
              OP_00{index + 1}
              <span
                className={`block py-2 text-left text-xs uppercase ${
                  project.status === "Complete"
                    ? "text-hud-green"
                    : "text-hud-pink"
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className="lg:p-2">
              <h2 className="text-sm font-bold! text-hud-cyan uppercase">
                {project.codename}
              </h2>

              <p className="oxanium mb-2 text-sm">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-1">
                {project.stack.map((item) => (
                  <Skill key={item} title={item} />
                ))}
              </div>

              <div className="mb-4">
                <CardSim className="mr-2 inline h-5 w-5 text-hud-green" />

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  title={project.href}
                  className="oxanium break-all text-xs text-hud-pink uppercase transition duration-300 hover:text-hud-pink-dark"
                >
                  {project.href}
                </a>
              </div>
            </div>

            <div className="lg:p-4">
              <div
                className="
            relative
            aspect-square
            w-full
            overflow-hidden

            sm:max-w-64
            lg:h-48
            lg:w-48
          "
              >
                <Image
                  src={project.avatar}
                  alt={`${project.title} cyberpunk avatar`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </HudPanel>
  );
}
