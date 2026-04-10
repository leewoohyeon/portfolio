import './Skills.scss';

type ChipType = 'main' | 'sub' | 'tool';

interface SkillGroup {
  label: string;
  type: ChipType;
  chips: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Core',
    type: 'main',
    chips: ['HTML', 'CSS · SCSS', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    label: 'Library · Framework',
    type: 'sub',
    chips: ['MUI', 'Bootstrap', 'jQuery', 'Swiper', 'API 연동', 'Git'],
  },
  {
    label: 'Design · Tool',
    type: 'tool',
    chips: ['Figma', 'Photoshop', 'Illustrator'],
  },
];

const Skills = () => {
  return (
    <div className="skills">
      <span className="skills title">Tech Stack</span>

      {SKILL_GROUPS.map(({ label, type, chips }) => (
        <div key={label} className="skills group">
          <p className="skills group label">{label}</p>
          <div className="skills group chips">
            {chips.map((chip) => (
              <span key={chip} className={`skills chip ${type}`}>{chip}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
