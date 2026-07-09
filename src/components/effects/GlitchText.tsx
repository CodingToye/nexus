import "./effects.css";

type GlitchTextProps = {
  text: string;
  className?: string;
};

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <span className={`glitch-text ${className}`} data-text={text}>
      <span>{text}</span>
    </span>
  );
}
