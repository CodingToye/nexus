export type VitalVariant = "green" | "cyan" | "pink";

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
    variant: "green",
  },
  {
    label: "Signal",
    value: "Online",
    detail: "Available for remote roles",
    variant: "cyan",
  },
  {
    label: "Uptime",
    value: "20+ YRS",
    detail: "JavaScript experience",
    variant: "green",
  },
  {
    label: "Core Stack",
    value: "React / TS",
    detail: "Primary frontend loadout",
    variant: "cyan",
  },
  {
    label: "Build State",
    value: "Passing",
    detail: "Ready to deploy",
    variant: "green",
  },
  {
    label: "Latency",
    value: "Low",
    detail: "UK / EU timezone",
    variant: "cyan",
  },
  {
    label: "Availability",
    value: "Open",
    detail: "Contract or permanent",
    variant: "pink",
  },
] satisfies Vital[];
