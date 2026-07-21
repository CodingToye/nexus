import type { SystemStatus } from "../layout/PortfolioShell";
import { profile } from "@/data/profile";
import { Biohazard } from "lucide-react";
import ComputerFan from "../effects/ComputerFan";

type StatusBarProps = {
  status: SystemStatus;
};

const statusConfig = {
  offline: {
    network: "OFFLINE",
    security: "LOCKED",
    interface: "DISABLED",
    colour: "text-error-bright",
  },
  authenticating: {
    network: "CONNECTING",
    security: "AUTHENTICATING",
    interface: "STANDBY",
    colour: "text-warning",
  },
  booting: {
    network: "CONNECTED",
    security: "VERIFIED",
    interface: "BOOTING",
    colour: "text-online-dim",
  },
  online: {
    network: "ONLINE",
    security: "SECURE",
    interface: "ACTIVE",
    colour: "text-online",
  },
} satisfies Record<
  SystemStatus,
  {
    network: string;
    security: string;
    interface: string;
    colour: string;
  }
>;

export default function StatusBar({ status }: StatusBarProps) {
  const currentStatus = statusConfig[status];
  return (
    <div className="status-bar flex flex-col gap-4 md:flex-row justify-between mb-4 bg-black/50 border border-secondary/20 p-2">
      <div className="flex flex-grow lg:gap-2 uppercase oxanium text-secondary-dim opacity-70 items-center justify-around md:justify-normal">
        <p className="text-primary flex">
          <Biohazard className="inline mr-1" />
          Nexus
        </p>
        <span>/ /</span>
        <p>
          Engineering Console <span className="lowercase">v</span>2.7
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:flex lg:items-center lg:gap-12 uppercase text-xs md:text-sm oxanium text-secondary-dim">
        <p>
          _Sys Status:{" "}
          <span className={currentStatus.colour}>{currentStatus.network}</span>
        </p>
        <p>
          _Net:{" "}
          <span className={currentStatus.colour}>{currentStatus.security}</span>
        </p>
        <p>
          _Interface:{" "}
          <span className={currentStatus.colour}>
            {currentStatus.interface}
          </span>
        </p>
        <p>
          _User:{" "}
          <span
            className={`${status !== "online" ? "blur-sm" : "text-secondary-bright/50"}`}
          >
            {" "}
            {profile.handle}
          </span>
        </p>
        <div className="flex">
          <ComputerFan variant="secondary" speed="slow" />
          <ComputerFan variant="primary" speed="fast" />
        </div>
      </div>
    </div>
  );
}
