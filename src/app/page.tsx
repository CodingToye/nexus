import MissionLog from "@/components/projects/MissionLog";
import OperationHistory from "@/components/experience/OperationHistory";
import StatusBar from "@/components/ui/StatusBar";
import AgentProfile from "@/components/profile/AgentProfile";
import CurrentAssignment from "@/components/profile/CurrentAssignment";
import InstalledModules from "@/components/skills/InstalledModules";
import VitalsPanel from "@/components/profile/VitalsPanel";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 text-cyan-100">
      <StatusBar />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <AgentProfile />
            <OperationHistory />
          </div>

          <MissionLog />

          <div className="flex flex-col gap-8">
            <CurrentAssignment />
            <InstalledModules />
            <VitalsPanel />
          </div>
        </div>
      </div>
    </main>
  );
}
