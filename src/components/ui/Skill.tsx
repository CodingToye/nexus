type SkillProps = {
  title?: string;
};

export default function Skill({ title }: SkillProps) {
  return (
    <span
      key={title}
      className="
              border
              border-hud-border
              bg-hud-bg
              px-3
              py-1
              text-xs
              uppercase
              tracking-wider
              text-hud-cyan
              transition-colors
              hover:border-hud-cyan
              hover:text-white
              label
            "
    >
      {title}
    </span>
  );
}
