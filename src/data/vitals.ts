export type VitalVariant = "tertiary" | "secondary" | "pink";

export type Vital = {
  label: string;
  value: string;
  detail: string;
  variant: VitalVariant;
};

export const vitals = [
  {
    label: "Pulse",
    value: "72 BPM",
    detail: "Stable delivery rhythm",
    variant: "tertiary",
  },
  {
    label: "Signal",
    value: "Online",
    detail: "Available for remote roles",
    variant: "secondary",
  },
  {
    label: "Uptime",
    value: "20+ YRS",
    detail: "JavaScript experience",
    variant: "tertiary",
  },
  {
    label: "Core Stack",
    value: "React / TS",
    detail: "Primary frontend loadout",
    variant: "secondary",
  },
  {
    label: "Build State",
    value: "Passing",
    detail: "Ready to deploy",
    variant: "tertiary",
  },
  {
    label: "Latency",
    value: "Low",
    detail: "UK / EU timezone",
    variant: "secondary",
  },
  {
    label: "Availability",
    value: "Open",
    detail: "Contract or permanent",
    variant: "pink",
  },
] satisfies Vital[];
