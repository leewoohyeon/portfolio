import './Projects.scss';
import { PROJECTS, CONNECTOR_COLORS, THEME_COLORS, type Project, type Theme } from '../../data/projects';

const ImgPlaceholder = ({ theme }: { theme: Theme }) => {
  const { imgBg, accent } = THEME_COLORS[theme];
  return (
    <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block', background: imgBg }}>
      {/* 브라우저 프레임 */}
      <rect x="56" y="18" width="208" height="104" rx="7" fill="none" stroke={accent} strokeWidth="2" opacity="0.35"/>
      {/* 상단 바 */}
      <rect x="56" y="18" width="208" height="22" rx="7" fill={accent} opacity="0.12"/>
      <rect x="56" y="29" width="208" height="11" fill={accent} opacity="0.12"/>
      {/* 닫기·최소화·최대화 버튼 */}
      <circle cx="71"  cy="29" r="3.5" fill={accent} opacity="0.5"/>
      <circle cx="82"  cy="29" r="3.5" fill={accent} opacity="0.5"/>
      <circle cx="93"  cy="29" r="3.5" fill={accent} opacity="0.5"/>
      {/* 주소창 */}
      <rect x="106" y="23" width="144" height="12" rx="6" fill={accent} opacity="0.15"/>
      {/* 구분선 */}
      <line x1="56" y1="40" x2="264" y2="40" stroke={accent} strokeWidth="1" opacity="0.25"/>
      {/* 왼쪽 텍스트 라인들 */}
      <rect x="70" y="52" width="88" height="7" rx="3.5" fill={accent} opacity="0.28"/>
      <rect x="70" y="65" width="116" height="6" rx="3"   fill={accent} opacity="0.18"/>
      <rect x="70" y="77" width="100" height="6" rx="3"   fill={accent} opacity="0.18"/>
      <rect x="70" y="89" width="76"  height="6" rx="3"   fill={accent} opacity="0.14"/>
      {/* 오른쪽 이미지 박스 */}
      <rect x="174" y="50" width="76" height="58" rx="5" fill={accent} opacity="0.13"/>
      {/* 산/풍경 아이콘 */}
      <circle cx="200" cy="65" r="6" fill={accent} opacity="0.28"/>
      <path d={`M178 104 L194 78 L206 90 L218 72 L246 104Z`} fill={accent} opacity="0.22"/>
    </svg>
  );
};

interface ConnectorProps {
  from: 'left' | 'right';
  color: string;
}

const Connector = ({ from, color }: ConnectorProps) => {
  const isFromLeft = from === 'left';
  const x1 = isFromLeft ? 250 : 570;
  const x2 = isFromLeft ? 650 : 170;

  return (
    <div className="board-item-connector">
      <svg viewBox="0 0 820 120" preserveAspectRatio="none">
        <path
          d={`M ${x1} 10 Q ${x2} 10 ${x2} 110`}
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray="8,6"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx={x1} cy="10"  r="5" fill={color} opacity="0.45" />
        <circle cx={x2} cy="110" r="5" fill={color} opacity="0.45" />
      </svg>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, period, team, role, tags, theme, imgSrc } = project;

  return (
    <div className={`card theme-${theme}`}>
      <div className="card-head">
        <div className="card-head-info">
          <p className="card-head-name">{name}</p>
          <span className="card-head-period">{period}</span>
        </div>
      </div>

      <div className="card-img">
        {imgSrc
          ? <img src={imgSrc} alt={`${name} 스크린샷`} />
          : <ImgPlaceholder theme={theme} />
        }
      </div>

      <div className="card-body">
            <p className="card-body-team">{team}</p>
        <div className="card-body-tags">
          {tags.map((tag) => (
            <span key={tag} className="card-body-tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="card-body-role">{role}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-title">
        <div className="projects-title-label">Projects</div>
        <p className="projects-title-sub">과거부터 현재까지 — 경력 프로젝트 6선</p>
      </div>

      <div className="board">
        <div className="board-start">
          <span className="board-start-badge">START</span>
        </div>

        {PROJECTS.map((project, idx) => {
          const position: 'left' | 'right' = idx % 2 === 0 ? 'left' : 'right';
          const isLast = idx === PROJECTS.length - 1;

          return (
            <div key={project.id} className="board-item">
              <div className={`board-item-row ${position}`}>
                <ProjectCard project={project} />
              </div>

              {!isLast && (
                <Connector
                  from={position}
                  color={CONNECTOR_COLORS[project.theme as Theme]}
                />
              )}
            </div>
          );
        })}

        <div className="board-finish">
          <span className="board-finish-badge">NOW</span>
          <p className="board-finish-sub">진행 중</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
