import './Projects.scss';
import { PROJECTS, CONNECTOR_COLORS, type Project, type Theme } from '../../data/projects';

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
  const { name, period, team, role, tags, url, theme, imgSrc } = project;

  return (
    <div className={`card theme-${theme}`}>

      <div className="card-head">
        <div className="card-head-texts">
          <p className="card-head-name">{name}</p>
          <p className="card-head-meta">{team}</p>
        </div>
        <span className="card-head-period">{period}</span>
      </div>

      <div className="card-img">
        {imgSrc ? (
          <img src={imgSrc} alt={`${name} 스크린샷`} />
        ) : (
          <>
            <span className="card-img-label">이미지 영역</span>
            <span className="card-img-sub">{url ?? '스크린샷 또는 목업'}</span>
          </>
        )}
      </div>

      <div className="card-body">
        <p className="card-body-role">{role}</p>
        <div className="card-body-tags">
          {tags.map((tag) => (
            <span key={tag} className="card-body-tag">{tag}</span>
          ))}
        </div>
      </div>

    </div>
  );
};

const Projects = () => {
  return (
    <section>
      <div className="projects-title">
        <div className="projects-title-label">Projects</div>
        <p className="projects-title-sub">과거부터 현재까지 — 경력 프로젝트 6선</p>
      </div>

      <div className="board">
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
      </div>
    </section>
  );
};

export default Projects;
