"use client";

import { useEffect, useState } from "react";

import MissionLog from "@/components/projects/MissionLog";
import OperationHistory from "@/components/experience/OperationHistory";
import AgentProfile from "@/components/profile/AgentProfile";
import CurrentAssignment from "@/components/profile/CurrentAssignment";
import InstalledModules from "@/components/skills/InstalledModules";
import VitalsPanel from "@/components/profile/VitalsPanel";
import StatusBar from "@/components/ui/StatusBar";
import LoginTerminal from "@/components/ui/LoginTerminal";

export type SystemStatus = "offline" | "authenticating" | "booting" | "online";

export default function PortfolioShell() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus>("offline");

  useEffect(() => {
    const authenticationTimer = window.setTimeout(() => {
      setSystemStatus("authenticating");
    }, 700);

    const bootTimer = window.setTimeout(() => {
      setSystemStatus("booting");
    }, 3000);

    const onlineTimer = window.setTimeout(() => {
      setSystemStatus("online");
    }, 4000);

    return () => {
      window.clearTimeout(authenticationTimer);
      window.clearTimeout(bootTimer);
      window.clearTimeout(onlineTimer);
    };
  }, []);

  const skipBootSequence = () => {
    setSystemStatus("online");
  };

  return (
    <main className="relative min-h-dvh overflow-x-clip p-6 text-secondary">
      <StatusBar status={systemStatus} />

      {systemStatus !== "online" ? (
        <LoginTerminal status={systemStatus} onSkip={skipBootSequence} />
      ) : (
        <div className="hud-boot-in w-full">
          <div
            className="
            grid
            w-full
            min-w-0
            gap-8
            md:grid-cols-2
            xl:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)]
          "
          >
            <div className="flex min-w-0 h-full flex-col gap-8">
              <div className="hud-module hud-module-delay-1 min-w-0 flex-grow">
                <AgentProfile variant="secondary" />
              </div>

              <div className="hud-module hud-module-delay-2 min-w-0 flex-shrink">
                <OperationHistory variant="primary" />
              </div>
            </div>

            <div className="hud-module hud-module-delay-3 min-w-0">
              <MissionLog variant="online" />
            </div>

            <div className="flex min-w-0 flex-col h-full gap-8">
              <div className="hud-module hud-module-delay-4 min-w-0 flex-grow">
                <CurrentAssignment variant="secondary" />
              </div>

              <div className="hud-module hud-module-delay-5 min-w-0 flex-shrink">
                <InstalledModules variant="primary" />
              </div>

              <div className="hud-module hud-module-delay-6 min-w-0 flex-shrink">
                <VitalsPanel variant="error" />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
