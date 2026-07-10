import MissionLog from "@/components/projects/MissionLog";
import OperationHistory from "@/components/experience/OperationHistory";
import StatusBar from "@/components/ui/StatusBar";
import AgentProfile from "@/components/profile/AgentProfile";
import CurrentAssignment from "@/components/profile/CurrentAssignment";
import InstalledModules from "@/components/skills/InstalledModules";
import Vitals from "@/components/ui/Vitals";
import VitalsPanel from "@/components/profile/VitalsPanel";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 text-cyan-100">
      <StatusBar />
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4">
            <AgentProfile />
            <VitalsPanel />
          </div>

          <MissionLog />

          <div className="flex flex-col gap-4">
            <CurrentAssignment />
            <InstalledModules />
            <OperationHistory />
          </div>
        </div>
      </div>
    </main>
  );
}
