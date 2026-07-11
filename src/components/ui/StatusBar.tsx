import type { SystemStatus } from "../layout/PortfolioShell";
import { profile } from "@/data/profile";
import { Biohazard } from "lucide-react";

type StatusBarProps = {
  status: SystemStatus;
};

const statusConfig = {
  offline: {
    network: "OFFLINE",
    security: "LOCKED",
    interface: "DISABLED",
    colour: "text-red-400",
  },
  authenticating: {
    network: "CONNECTING",
    security: "AUTHENTICATING",
    interface: "STANDBY",
    colour: "text-amber-300",
  },
  booting: {
    network: "CONNECTED",
    security: "VERIFIED",
    interface: "BOOTING",
    colour: "text-cyan-300",
  },
  online: {
    network: "ONLINE",
    security: "SECURE",
    interface: "ACTIVE",
    colour: "text-green-400",
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
    <div className="status-bar flex flex-col gap-4 md:flex-row justify-between mb-4 bg-black/50 border border-hud-cyan/20 p-2">
      <div className="flex flex-grow lg:gap-2 uppercase oxanium text-hud-cyan opacity-70 justify-around md:justify-normal">
        <p className="text-hud-pink flex">
          <Biohazard className="inline mr-1" />
          Nexus
        </p>
        <span>/ /</span>
        <p>
          Engineering Console <span className="lowercase">v</span>2.7
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:flex lg:items-center lg:gap-12 uppercase text-xs md:text-sm oxanium text-cyan-300">
        <p>
          _Sys Status:{" "}
          <span className="text-hud-green">{currentStatus.network}</span>
        </p>
        <p>
          _Net: <span className="text-hud-green">{currentStatus.security}</span>
        </p>
        <p>
          _Interface:{" "}
          <span className={currentStatus.colour}>
            {currentStatus.interface}
          </span>
        </p>
        <p>
          _User: <span className="text-hud-green"> {profile.handle}</span>
        </p>
      </div>
    </div>
  );
}
