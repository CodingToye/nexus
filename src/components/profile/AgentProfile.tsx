import HudPanel from "../hud/HudPanel";
import AvatarVideo from "./AvatarVideo";
import { contactLinks } from "@/data/contact";
import { Terminal, MapPin, Locate, Scan } from "lucide-react";
import { profile } from "@/data/profile";
import AnimatedIntroCopy from "@/components/profile/AnimatedIntroCopy";

export default function AgentProfile() {
  return (
    <HudPanel title="_Agent Profile" className="max-w-fit " variant="pink">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative h-64 w-full md:w-64 overflow-hidden rounded-sm border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
          <AvatarVideo
            className="w-full md:w-64"
            poster={profile.avatar}
            title={profile.title}
          />
        </div>

        <div className="flex flex-col gap-4 flex-grow">
          <div className="border-b border-white/20 pb-2 oxanium">
            <h1 className="text-3xl font-black text-cyan-300">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl text-zinc-300">{profile.title}</p>
            <p className="text-zinc-500">{profile.subtitle}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 text-hud-pink" />
              <p className="uppercase oxanium text-sm">
                <span className="block text-hud-cyan ">Location</span>
                Cymru District, <span className="text-hud-green">CH7</span>{" "}
                Sector
              </p>
            </div>
            <div className="flex gap-4">
              <Locate className="h-5 w-5 text-hud-pink" />
              <p className="uppercase oxanium text-sm">
                <span className="block text-hud-cyan ">Current Status</span>
                <span className="text-hud-green">
                  Available for remote contracts
                </span>
              </p>
            </div>
            <div className="flex gap-4">
              <Scan className="h-5 w-5 text-hud-pink" />
              <p className="uppercase oxanium text-sm">
                <span className="block text-hud-cyan ">Range of travel</span>
                <span className="text-hud-green">30</span> miles
              </p>
            </div>
          </div>
        </div>
      </div>
      <AnimatedIntroCopy />
      <footer className="mt-10 flex flex-wrap gap-4 justify-between  text-sm text-zinc-400 oxanium">
        {contactLinks.map((link) => (
          <div key={link.label}>
            <a href={link.href} className="hover:text-cyan-300">
              {link.label}: {link.value}
            </a>
          </div>
        ))}
      </footer>
    </HudPanel>
  );
}
