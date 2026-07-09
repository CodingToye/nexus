import HudPanel from "../hud/HudPanel";
import { skills } from "@/data/skills";
import Skill from "../ui/Skill";

export default function InstalledModules({}) {
  return (
    <HudPanel title="_Installed Modules" variant="pink">
      {skills.map((skillGroup) => (
        <article key={skillGroup.category} className="mb-8">
          <h3 className="text-hud_text uppercase mb-2">
            _{skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <Skill key="skill" title={skill} />
            ))}
          </div>
        </article>
      ))}
    </HudPanel>
  );
}
