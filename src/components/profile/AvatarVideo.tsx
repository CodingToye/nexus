import Image from "next/image";

type AvatarVideoProps = {
  className?: string;
  poster: string;
  title: string;
};

export default function AvatarVideo({
  className = "",
  poster,
  title,
}: AvatarVideoProps) {
  return (
    <div
      className={`
        relative aspect-square overflow-hidden 
        bg-black shadow-[0_0_30px_rgba(49,220,220,0.25)]
        ${className}
      `}
    >
      <video
        className="h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        {/* <source src="/videos/avatar-loop.webm" type="video/webm" /> */}
        <source src="/videos/avatar_v3.mp4" type="video/mp4" />
      </video>

      <Image
        src={poster}
        alt={`${title} cyberpunk avatar`}
        fill
        priority
        className="hidden h-full w-full object-cover motion-reduce:block"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-secondary-500/10 via-transparent to-pink-500/10" />

      <div className="pointer-events-none absolute inset-0 border border-white/5" />

      <div
        className="
          pointer-events-none absolute inset-0 opacity-20
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:100%_4px]
        "
      />
    </div>
  );
}
