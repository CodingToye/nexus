export const fakePanelsContent = [
  {
    title: "_system_log",
    entries: [
      "Portfolio interface initialised",
      "Agent profile loaded",
      "Project archive connected",
      "Experience records verified",
      "Contact channels available",
      "System status: operational",
    ],
    duration: 1,
  },
  {
    title: "_current_focus",
    entries: [
      "React and TypeScript development",
      "Next.js portfolio architecture",
      "Accessible component design",
      "Reducing frontend technical debt",
    ],
    duration: 2,
  },
  {
    title: "_capabilities",
    entries: [
      "Component architecture",
      "Design system development",
      "Legacy code modernisation",
      "Frontend performance analysis",
      "Unit and integration testing",
      "Developer mentoring",
      "Cross-team technical planning",
      "Production issue diagnosis",
    ],
    duration: 4,
  },
  {
    title: "_availability",
    entries: [
      "Open to remote opportunities",
      "Permanent or fixed-term contract",
      "UK and European time zones",
    ],
    duration: 2,
  },
];

type FakePanelProps = {
  title: string;
  entries: string[];
  duration?: number;
};

export default function FakePanel({
  title,
  entries,
  duration = 10,
}: FakePanelProps) {
  const content = (
    <div className="fake-panel-scroll__content">
      <strong className="text-tertiary">{title}</strong>
      {entries.map((entry, index) => (
        <p key={`${entry}-${index}`}>
          <span className="text-tertiary">%gt;</span> {entry}
        </p>
      ))}
    </div>
  );

  return (
    <div className="hud-panel hud-panel--compact text-micro opacity-30 h-14">
      <div className="fake-panel-scroll">
        <div
          className="fake-panel-scroll__track"
          style={{
            animationDuration: `${duration}s`,
          }}
        >
          {content}

          <div aria-hidden="true">{content}</div>
        </div>
      </div>
    </div>
  );
}
