import { profile } from "@/data/profile";
import { Biohazard } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="status-bar flex flex-col gap-4 md:flex-row justify-between mb-4 bg-black/50 border border-hud-cyan/20 p-2">
      <div className="flex flex-grow gap-2 uppercase oxanium text-hud-cyan opacity-70 justify-around md:justify-normal">
        <p className="text-hud-pink flex">
          <Biohazard className="inline mr-1" />
          Nexus
        </p>
        <span>/ /</span>
        <p>
          Engineering Console <span className="lowercase">v</span>2.7
        </p>
      </div>
      <div className="flex items-center gap-12 uppercase text-xs md:text-sm oxanium text-cyan-300">
        <p>
          _Sys Status: <span className="text-hud-green ml-1"> Online</span>
        </p>
        <p>
          _Net: <span className="text-hud-green ml-1"> Secure</span>
        </p>
        <p>
          _User: <span className="text-hud-green ml-1"> {profile.handle}</span>
        </p>
      </div>
    </div>
  );
}
