import HudPanel from "../hud/HudPanel";
import AvatarVideo from "./AvatarVideo";
import { contactLinks } from "@/data/contact";
import { LuBatteryMedium } from "react-icons/lu";
import { BiMemoryCard } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import { RiPinDistanceFill } from "react-icons/ri";
import { colourVariants, type ColourVariant } from "@/lib/colourVariants";

import { profile } from "@/data/profile";
import AnimatedIntroCopy from "@/components/profile/AnimatedIntroCopy";

function BatteryLife(variant: string) {
  return <LuBatteryMedium className={`size-6 text-${variant}`} />;
}

type AgentProfileProps = {
  variant: ColourVariant;
};

export default function AgentProfile({ variant }: AgentProfileProps) {
  const colours = colourVariants[variant];
  return (
    <HudPanel
      title="_Agent Profile"
      className="h-full"
      variant={variant}
      shimmer
      effectsDetail={BatteryLife(variant)}
    >
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div
          className={`relative h-64 w-full md:w-64 overflow-hidden border ${colours.border} shadow-lg shadow-black/40`}
        >
          <AvatarVideo
            className="w-full md:w-64"
            poster={profile.avatar}
            title={profile.title}
          />
        </div>

        <div className={`flex flex-col gap-4 flex-grow text-${variant}-dim`}>
          <div className="border-b border-white/20 pb-2 oxanium">
            <h1 className={`text-3xl font-black text-${variant}`}>
              {profile.name}
            </h1>
            <p className={`mt-2 text-xl text-white/75`}>{profile.title}</p>
            <p className="text-white/50">{profile.subtitle}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-[32px_1fr]">
              <FaLocationDot className={`text-${variant} size-5`} />
              <p className={`uppercase oxanium text-xs text-${variant}-bright`}>
                <span className="block text-white">Location</span>
                Cymru District, <span>CH7</span> Sector
              </p>
            </div>
            <div className="grid grid-cols-[32px_1fr]">
              <RiPinDistanceFill className={`text-${variant} size-6`} />
              <p className={`uppercase oxanium text-xs text-${variant}-bright`}>
                <span className="block text-white">Range of travel</span>
                <span className="text-tertiary">30</span> miles
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[32px_1fr]">
            <LuBadgeCheck className={`text-${variant} size-5`} />
            <p className={`uppercase oxanium text-xs text-${variant}-bright`}>
              <span className="block text-white">Current Status</span>
              <span className="text-tertiary">
                Available for remote contracts
              </span>
            </p>
          </div>
        </div>
      </div>
      <AnimatedIntroCopy variant={variant} />
      <footer className="mt-10 text-sm text-white/50 oxanium flex flex-col gap-4">
        <a
          href="nicktoye_resume_2026_q3.pdf"
          download="nicktoye_resume_2026_q3.pdf"
          className="mb-4 grid grid-cols-[32px_1fr] hover:text-white"
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
