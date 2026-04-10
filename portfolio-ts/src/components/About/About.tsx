import './About.scss';

interface AboutCell {
  label: string;
  value: string;
  desc: string;
}

const CELLS: AboutCell[] = [
  { label: '경력',     value: '4년 11개월',    desc: '디자인 → 퍼블 → 프론트'  },
  { label: '주요 역할', value: '퍼블리셔',      desc: 'React UI 개발 · 반응형'   },
  { label: '자격증',   value: '웹디자인기능사', desc: 'GTQ 1급 (국가공인)'        },
];

const About = () => {
  return (
    <div className="about">
      {CELLS.map(({ label, value, desc }) => (
        <div key={label} className="about cell">
          <p className="about cell label">{label}</p>
          <p className="about cell value">{value}</p>
          <p className="about cell desc">{desc}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
