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
            hover:bg-black/50
            transition
            flex
            flex-col
            gap-4

            lg:grid
            lg:grid-cols-[90px_1fr]
            lg:gap-0
            lg:p-0
            shadow-lg
            shadow-black/40
      "
          >
            <div
              className="
              border-b
              border-hud-cyan-dim/30
              p-2
              text-xs
              text-hud-cyan/40
              lg:border-r
              lg:border-b-0
              lg:p-4
              flex
              flex-col
              items-center
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
            <div
              className=" flex flex-col flex-grow lg:grid
              p-4 items-center
            lg:grid-cols-[1fr_auto]
            lg:gap-0
            lg:p-0"
            >
              <div className="lg:p-4">
                <h2 className="text-sm font-bold! text-hud-cyan uppercase">
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
                  className="oxanium break-all text-xs text-hud-pink uppercase transition duration-300 hover:text-hud-pink-dark"
                >
                  <Image
                    src={project.avatar}
                    alt={`${project.title} cyberpunk avatar`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </a>
              </div>
            </div>
            <div className="lg:grid-cols-1 col-span-2 p-4 lg:border-t lg:border-hud-cyan-dim/30">
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
          </article>
        ))}
      </div>
    </HudPanel>
  );
}
