import './Skills.scss';

const GROUPS = [
  {
    label: "CORE",
    type: "main" as const,
    chips: [
      "HTML",
      "CSS · SCSS",
      "jQuery",
      "JavaScript",
      "React",
      "TypeScript",
    ],
  },
  {
    label: "DESIGN · TOOL",
    type: "tool" as const,
    chips: ["Photoshop", "Illustrator", "Figma"],
  },
];



const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <span className="skills-title">EQUIPPED SKILLS</span>
      </div>

      {GROUPS.map(({ label, type, chips }) => (
        <div key={label} className={`skills-group type-${type}`}>
          <div className="skills-group-header">
            <span className="skills-group-label">{label}</span>
          </div>
          <div className="skills-chips">
            {chips.map((chip) => (
              <span key={chip} className={`skills-chip type-${type}`}>{chip}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
