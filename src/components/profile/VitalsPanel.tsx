import HudPanel from "@/components/hud/HudPanel";
import HeartRate from "@/components/effects/HeartRate";
import { vitals } from "@/data/vitals";

const variantClasses = {
  green: "text-hud-green border-hud-green/40",
  cyan: "text-hud-cyan border-hud-cyan/40",
  pink: "text-hud-pink border-hud-pink/40",
};

export default function VitalsPanel() {
  return (
    <HudPanel title="_Vitals" variant="green" className="flex-grow">
      <div className="mb-6">
        <HeartRate bpm={72} label="Pulse" variant="green" />
      </div>

      <div className="grid gap-3">
        {vitals
          .filter((vital) => vital.label !== "Pulse")
          .map((vital) => (
            <div
              key={vital.label}
              className="
                border
                border-hud-border
                bg-hud-bg/40
                px-3
                py-2
              "
            >
              <div className="flex items-center justify-between gap-4">
                <span className="oxanium text-xs uppercase tracking-[0.2em] text-hud-muted">
                  {vital.label}
                </span>

                <span
                  className={`oxanium border px-2 py-0.5 text-xs uppercase ${variantClasses[vital.variant]}`}
                >
                  {vital.value}
                </span>
              </div>

              <p className="oxanium mt-2 text-xs uppercase text-hud-text/70">
                {vital.detail}
              </p>
            </div>
          ))}
      </div>
    </HudPanel>
  );
}
74;
