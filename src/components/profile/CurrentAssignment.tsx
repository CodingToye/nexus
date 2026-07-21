import HudPanel from "../hud/HudPanel";
import { profile } from "@/data/profile";
import { colourVariants, type ColourVariant } from "@/lib/colourVariants";

type CurrentAssignmentProps = {
  variant: ColourVariant;
};

export default function CurrentAssignment({ variant }: CurrentAssignmentProps) {
  const colours = colourVariants[variant];
  return (
    <HudPanel
      title="_Current Assignment"
      variant={variant}
      className="h-full"
      shimmer
    >
      <article className={`${colours.text}`}>
        <p className="mt-2 text-3xl font-bold oxanium">{profile.currentTask}</p>
        <p className="mt-2 oxanium text-xs uppercase">
          Status: <span className="text-tertiary">{profile.status}</span>
        </p>
        <p className={`uppercase oxanium text-sm ${colours.textDim}`}>
          {profile.status_summary}
        </p>
      </article>
    </HudPanel>
  );
}
