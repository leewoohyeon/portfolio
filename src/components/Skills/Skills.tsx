import './Skills.scss';

const SKILL_GROUPS = [
  {
    label: "CORE",
    chips: ["HTML", "CSS · SCSS", "jQuery", "JavaScript", "React", "TypeScript"],
  },
  {
    label: "DESIGN · TOOL",
    chips: ["Photoshop", "Illustrator", "Figma", "Claude"],
  },
];

const Skills = () => {
  return (
    <div className="skills-col">
      {/* ABOUT ME */}
      <div className="skills-section">
        <div className="skills-section-title">About Me</div>
        <p className="skills-about-text">
          안녕하세요, 프론트엔드 개발자 이우현입니다.
        </p>
        <p className="skills-about-text">
          디자이너로 시작해 퍼블리셔로 성장한 4년 11개월의 경험을 바탕으로,
          디자인 감각과 개발 역량을 함께 갖춘 개발자입니다.
        </p>
        <p className="skills-about-text">
          React · TypeScript 기반 웹 개발부터 UI/UX 구현까지,
          디자인부터 프론트엔드까지 아우르며 개발자와 원활하게 협업합니다.
        </p>
      </div>

      {/* SKILL */}
      <div className="skills-section">
        <div className="skills-section-title">Skill</div>
        {SKILL_GROUPS.map(({ label, chips }) => (
          <div key={label} className="skills-group">
            <span className="skills-group-label">{label}</span>
            <div className="skills-keywords">
              {chips.map((chip) => (
                <span key={chip} className="skills-keyword-chip">{chip}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
