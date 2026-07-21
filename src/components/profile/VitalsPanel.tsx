import HudPanel from "@/components/hud/HudPanel";
import HeartRate from "@/components/effects/HeartRate";
import { vitals } from "@/data/vitals";
import { colourVariants, type ColourVariant } from "@/lib/colourVariants";

type VitalsPanelProps = {
  variant: ColourVariant;
};

export default function VitalsPanel({ variant }: VitalsPanelProps) {
  const colours = colourVariants[variant];
  return (
    <HudPanel title="_Vitals" variant={variant} className="h-full">
      <div className="mb-6">
        <HeartRate bpm={72} label="Pulse" variant={variant} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {vitals
          .filter((vital) => vital.label !== "Pulse")
          .map((vital) => (
            <div
              key={vital.label}
              className={`
                border
                ${colours.border}
                ${colours.bgDim}
                px-3
                py-2
              `}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`oxanium text-xs uppercase tracking-[0.2em] ${colours.textDim}`}
                >
                  {vital.label}
                </span>

                <span
                  className={`oxanium border px-2 py-0.5 text-xs uppercase ${colours.textBright}`}
                >
                  {vital.value}
                </span>
              </div>

              <p
                className={`oxanium mt-2 text-xs uppercase ${colours.textBright}`}
              >
                {vital.detail}
              </p>
            </div>
          ))}
      </div>
    </HudPanel>
  );
}
