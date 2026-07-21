import HudPanel from "../hud/HudPanel";
import { skills } from "@/data/skills";
import Skill from "../ui/Skill";
import { colourVariants, type ColourVariant } from "@/lib/colourVariants";

type InstalledModulesProps = {
  variant: ColourVariant;
};

export default function InstalledModules({ variant }: InstalledModulesProps) {
  const colours = colourVariants[variant];
  return (
    <HudPanel title="_Installed Modules" variant="primary">
      {skills.map((skillGroup) => (
        <article key={skillGroup.category} className={`mb-8 ${colours.text}`}>
          <h3 className={`${colours.text} uppercase mb-2 text-sm`}>
            _{skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill, index) => (
              <Skill key={index} title={skill} />
            ))}
          </div>
        </article>
      ))}
    </HudPanel>
  );
}
