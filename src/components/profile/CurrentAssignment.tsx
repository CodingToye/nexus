import HudPanel from "../hud/HudPanel";
import { profile } from "@/data/profile";

export default function CurrentAssignment({}) {
  return (
    <HudPanel title="_Current Assignment" variant="pink" shimmer>
      <p className="mt-2 text-3xl font-bold text-hud-cyan oxanium">
        {profile.currentTask}
      </p>
      <p className="mt-2 oxanium text-xs uppercase">
        Status: <span className="text-hud-green">{profile.status}</span>
      </p>
      <p className="text-hud-muted uppercase oxanium text-sm">
        {profile.status_summary}
      </p>
    </HudPanel>
  );
}
