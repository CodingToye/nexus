import type { SystemStatus } from "@/components/layout/PortfolioShell";

type LoginTerminalProps = {
  status: Exclude<SystemStatus, "online">;
  onSkip: () => void;
};

const statusMessages = {
  offline: {
    heading: "SYSTEM LOCKED",
    username: "",
    accessKey: "",
    message: "Awaiting identification protocol...",
  },
  authenticating: {
    heading: "IDENTITY DETECTED",
    username: "PORTFOLIO_VISITOR",
    accessKey: "••••••••••••••••",
    message: "Validating access credentials...",
  },
  booting: {
    heading: "ACCESS GRANTED",
    username: "PORTFOLIO_VISITOR",
    accessKey: "••••••••••••••••",
    message: "Initialising agent interface...",
  },
} satisfies Record<
  LoginTerminalProps["status"],
  {
    heading: string;
    username: string;
    accessKey: string;
    message: string;
  }
>;

export default function LoginTerminal({ status, onSkip }: LoginTerminalProps) {
  const content = statusMessages[status];

  return (
    <section
      className="flex min-h-[75vh] items-center justify-center"
      aria-live="polite"
    >
      <div className="boot-terminal w-full max-w-xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-secondary-400/60">
              Secure access terminal
            </p>

            <h1 className="mt-2 text-2xl font-semibold tracking-[0.15em] text-secondary">
              {content.heading}
            </h1>
          </div>

          <span
            className="size-3 animate-pulse rounded-full bg-red-500"
            aria-hidden="true"
          />
        </div>

        <div className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-secondary-400/70">
              Operator ID
            </span>

            <div className="boot-input">
              {content.username || (
                <span className="animate-pulse text-secondary-400/30">_</span>
              )}
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-secondary-400/70">
              Access key
            </span>

            <div className="boot-input tracking-[0.3em]">
              {content.accessKey || (
                <span className="animate-pulse text-secondary-400/30">_</span>
              )}
            </div>
          </label>
        </div>

        <div className="mt-8 border-t border-secondary/20 pt-5">
          <div className="flex items-center gap-3">
            <span
              className={[
                "size-2 rounded-full",
                status === "booting"
                  ? "bg-tertiary-400"
                  : "animate-pulse bg-amber-300",
              ].join(" ")}
              aria-hidden="true"
            />

            <p className="text-sm uppercase tracking-[0.12em] text-secondary-300">
              {content.message}
            </p>
          </div>

          <div className="boot-progress mt-5">
            <div
              className={[
                "boot-progress-bar",
                status === "offline" && "w-[8%]",
                status === "authenticating" && "w-[55%]",
                status === "booting" && "w-full",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onSkip}
          className="mt-6 text-xs uppercase tracking-[0.15em] text-secondary-400/50 transition-colors hover:text-secondary-200"
        >
          Skip boot sequence
        </button>
      </div>
    </section>
  );
}
