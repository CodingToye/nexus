import HeartRate from "../effects/HeartRate";
import HudPanel from "../hud/HudPanel";

export default function Vitals({}) {
  return (
    <HudPanel title="_Vitals" variant="pink" className="flex flex-grow">
      <HeartRate bpm={84} label="Signal" variant="cyan" className="" />
    </HudPanel>
  );
}
