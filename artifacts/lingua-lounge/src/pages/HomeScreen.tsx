type ModuleInfo = {
  number: number;
  description: string;
  active: boolean;
};

const modules: ModuleInfo[] = [
  { number: 1, description: "Greetings, Family & Personal Info", active: true },
  { number: 2, description: "Furniture, Objects & Appointments", active: true },
  { number: 3, description: "Hobbies, Food & Free Time", active: true },
  { number: 4, description: "Travel, Time & Past Events", active: true },
];

type Props = {
  onSelect: (moduleNumber: number) => void;
};

export default function HomeScreen({ onSelect }: Props) {
  return (
    <div className="screen start-screen">
      <div className="start-hero">
        <div className="flag-bar" />
        <div className="start-logo-row">
          <span className="logo-icon">🇩🇪</span>
          <span className="logo-text">LinguaLounge</span>
        </div>
        <div className="start-badge">A1.1</div>
        <h1 className="start-title">German Practice Hub</h1>
      </div>

      <div className="start-body">
        <p className="module-label">Select a module</p>

        <div className="chapter-list">
          {modules.map((mod) => (
            <button
              key={mod.number}
              className={`chapter-btn module-card${!mod.active ? " module-card-inactive" : ""}`}
              onClick={() => onSelect(mod.number)}
            >
              <div className="chapter-btn-left">
                <span className="chapter-number">Module {mod.number}</span>
                <span className="chapter-title module-card-description">
                  {mod.description}
                </span>
                {!mod.active && (
                  <span className="module-card-badge">Coming Soon</span>
                )}
              </div>
              <span className="chapter-arrow">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
