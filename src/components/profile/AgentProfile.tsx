import HudPanel from "../hud/HudPanel";
import AvatarVideo from "./AvatarVideo";
import { contactLinks } from "@/data/contact";
import { MapPin, Locate, Scan } from "lucide-react";
import { BiMemoryCard } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import { RiPinDistanceFill } from "react-icons/ri";

import { profile } from "@/data/profile";
import AnimatedIntroCopy from "@/components/profile/AnimatedIntroCopy";

export default function AgentProfile() {
  return (
    <HudPanel
      title="_Agent Profile"
      className="max-w-fit "
      variant="pink"
      shimmer
    >
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
            <h1 className="text-3xl font-black text-hud-cyan">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl text-zinc-300">{profile.title}</p>
            <p className="text-zinc-500">{profile.subtitle}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-[32px_1fr]">
              <FaLocationDot className="text-hud-pink size-5" />
              <p className="uppercase oxanium text-xs">
                <span className="block text-hud-cyan ">Location</span>
                Cymru District, <span className="text-hud-green">CH7</span>{" "}
                Sector
              </p>
            </div>
            <div className="grid grid-cols-[32px_1fr]">
              <RiPinDistanceFill className="text-hud-pink size-6" />
              <p className="uppercase oxanium text-xs">
                <span className="block text-hud-cyan ">Range of travel</span>
                <span className="text-hud-green">30</span> miles
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[32px_1fr]">
            <LuBadgeCheck className="text-hud-green size-5" />
            <p className="uppercase oxanium text-xs">
              <span className="block text-hud-cyan ">Current Status</span>
              <span className="text-hud-green">
                Available for remote contracts
              </span>
            </p>
          </div>
        </div>
      </div>
      <AnimatedIntroCopy />
      <footer className="mt-10 text-sm text-zinc-400 oxanium flex flex-col gap-4">
        <a
          href="nicktoye_resume_2026_q3.pdf"
          download="nicktoye_resume_2026_q3.pdf"
          className="mb-4 grid grid-cols-[32px_1fr]"
        >
          <BiMemoryCard className="inline size-6" /> [Extract_Resume.pdf]
        </a>
        {contactLinks.map(({ label, value, href, icon: Icon }) => (
          <div key={label}>
            <a href={href} className="grid grid-cols-[32px_1fr]">
              <Icon aria-hidden="true" className="inline mr-2 size-5" />
              <span>[{value}]</span>
            </a>
          </div>
        ))}
      </footer>
    </HudPanel>
  );
}
