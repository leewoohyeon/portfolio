import { useState, useEffect, useRef, forwardRef, useCallback } from "react";
import "./Projects.scss";
import {
  PROJECTS,
  CONNECTOR_COLORS,
  THEME_COLORS,
  type Project,
  type Theme,
} from "../../data/projects";

const TOKEN_W = 50;
const TOKEN_H = 67;

// ── ImgPlaceholder
const ImgPlaceholder = ({ theme }: { theme: Theme }) => {
  const { imgBg, accent } = THEME_COLORS[theme];
  return (
    <svg
      viewBox="0 0 320 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        background: imgBg,
      }}
    >
      <rect
        x="56"
        y="18"
        width="208"
        height="104"
        rx="7"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        opacity="0.35"
      />
      <rect
        x="56"
        y="18"
        width="208"
        height="22"
        rx="7"
        fill={accent}
        opacity="0.12"
      />
      <rect
        x="56"
        y="29"
        width="208"
        height="11"
        fill={accent}
        opacity="0.12"
      />
      <circle cx="71" cy="29" r="3.5" fill={accent} opacity="0.5" />
      <circle cx="82" cy="29" r="3.5" fill={accent} opacity="0.5" />
      <circle cx="93" cy="29" r="3.5" fill={accent} opacity="0.5" />
      <rect
        x="106"
        y="23"
        width="144"
        height="12"
        rx="6"
        fill={accent}
        opacity="0.15"
      />
      <line
        x1="56"
        y1="40"
        x2="264"
        y2="40"
        stroke={accent}
        strokeWidth="1"
        opacity="0.25"
      />
      <rect
        x="70"
        y="52"
        width="88"
        height="7"
        rx="3.5"
        fill={accent}
        opacity="0.28"
      />
      <rect
        x="70"
        y="65"
        width="116"
        height="6"
        rx="3"
        fill={accent}
        opacity="0.18"
      />
      <rect
        x="70"
        y="77"
        width="100"
        height="6"
        rx="3"
        fill={accent}
        opacity="0.18"
      />
      <rect
        x="70"
        y="89"
        width="76"
        height="6"
        rx="3"
        fill={accent}
        opacity="0.14"
      />
      <rect
        x="174"
        y="50"
        width="76"
        height="58"
        rx="5"
        fill={accent}
        opacity="0.13"
      />
      <circle cx="200" cy="65" r="6" fill={accent} opacity="0.28" />
      <path
        d="M178 104 L194 78 L206 90 L218 72 L246 104Z"
        fill={accent}
        opacity="0.22"
      />
    </svg>
  );
};

// ── Connector
interface ConnectorProps {
  from: "left" | "right";
  color: string;
}

const Connector = forwardRef<HTMLDivElement, ConnectorProps>(
  ({ from, color }, ref) => {
    const isFromLeft = from === "left";
    const x1 = isFromLeft ? 250 : 570;
    const x2 = isFromLeft ? 650 : 170;
    return (
      <div className="board-item-connector" ref={ref}>
        <svg viewBox="0 0 820 120" preserveAspectRatio="none">
          <path
            d={`M ${x1} 10 C ${x1} 110 ${x2} 10 ${x2} 110`}
            stroke={color}
            strokeWidth="2.5"
            strokeDasharray="8,6"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx={x1} cy="10" r="5" fill={color} opacity="0.45" />
          <circle cx={x2} cy="110" r="5" fill={color} opacity="0.45" />
        </svg>
      </div>
    );
  },
);

// ── Modal
interface ModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ModalProps) => {
  const {
    name,
    period,
    role,
    tags,
    theme,
    imgSrc,
    url,
    projectInfo,
  } = project;
  const images = imgSrc ? (Array.isArray(imgSrc) ? imgSrc : [imgSrc]) : [];
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);
  const hasMultiple = images.length > 1;
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((i) => (i + 1) % images.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal theme-${theme}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <p className="modal-header-name">{name}</p>
          <button className="modal-close" onClick={onClose} aria-label="닫기">
            <svg
              viewBox="0 -960 960 960"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
            </svg>
          </button>
        </div>
        <div className="modal-img">
          {images.length > 0 ? (
            <div
              className="modal-img-track"
              style={{ transform: `translateX(-${imgIdx * 100}%)` }}
            >
              {images.map((src, i) => (
                <img
                  key={i}
                  src={`${import.meta.env.BASE_URL}${src}`}
                  alt={`${name} 이미지 ${i + 1}`}
                  image-rendering="auto"
                />
              ))}
            </div>
          ) : (
            <ImgPlaceholder theme={theme} />
          )}
          {hasMultiple && (
            <>
              <button
                className="modal-img-btn prev"
                onClick={prev}
                aria-label="이전"
              >
                <svg
                  viewBox="0 -960 960 960"
                  width="20"
                  height="20"
                  fill="currentColor"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
                </svg>
              </button>
              <button
                className="modal-img-btn next"
                onClick={next}
                aria-label="다음"
              >
                <svg
                  viewBox="0 -960 960 960"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
                </svg>
              </button>
              <div className="modal-img-dots">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`modal-img-dot${i === imgIdx ? " active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setImgIdx(i);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="modal-body">
          {/* 메타 정보 */}
          <div className="modal-meta">
            <div className="modal-meta-row">
              <span className="modal-meta-label">기간</span>
              <span className="modal-meta-value">{period}</span>
            </div>
            <div className="modal-meta-row">
              <span className="modal-meta-label">기여도</span>
              <span className="modal-meta-value">20%</span>
            </div>
          </div>

          {/* 기술 태그 */}
          <div className="modal-section">
            <span className="modal-section-label">주요기술</span>
            <div className="modal-tags">
              {tags.map((tag) => (
                <span key={tag} className="modal-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 역할 */}
          <div className="modal-section">
            <span className="modal-section-label">담당 역할</span>
            <p className="modal-role">{role}</p>
          </div>

          {/* 설명 */}
          <div className="modal-section">
            <p className="modal-project-info">{projectInfo}</p>
          </div>

          {url && (
            <a
              className="modal-link"
              href={`https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M15 3h6v6M10 14L21 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              사이트 바로가기
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ── 프로젝트 카드
interface ProjectCardProps {
  project: Project;
  stepNum: number;
  onClick: () => void;
  headRef: (el: HTMLDivElement | null) => void;
}

const ProjectCard = ({
  project,
  stepNum,
  onClick,
  headRef,
}: ProjectCardProps) => {
  const { name, period, role, tags, theme, imgSrc, excerpt } = project;
  const thumbnail = Array.isArray(imgSrc) ? imgSrc[0] : imgSrc;
  return (
    <div className={`card theme-${theme}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-head" ref={headRef}>
          <span className="card-step-badge">
            <span>{stepNum}</span>
          </span>
          <div className="card-head-info">
            <p className="card-head-name">{name}</p>
            <span className="card-head-period">{period}</span>
          </div>
        </div>
        <div className="card-img">
          {thumbnail ? (
            <img
              src={`${import.meta.env.BASE_URL}${thumbnail}`}
              alt={`${name} 프로젝트 이미지`}
            />
          ) : (
            <ImgPlaceholder theme={theme} />
          )}
          <div className="card-img-overlay">
            <span className="card-img-overlay-btn">상세보기</span>
          </div>
        </div>
        <div className="card-body">
          <div className="card-body-tags">
            {tags.map((tag) => (
              <span key={tag} className="card-body-tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="card-body-role">{role}</p>
          <p className="card-body-excerpt">{excerpt}</p>
        </div>
      </div>
    </div>
  );
};

// CSS transform 무시, layout 기준 offset 계산
function getLayoutOffset(el: HTMLElement, board: HTMLElement) {
  let top = 0,
    left = 0;
  let cur: HTMLElement | null = el;
  while (cur && cur !== board) {
    top += cur.offsetTop;
    left += cur.offsetLeft;
    cur = cur.offsetParent as HTMLElement | null;
  }
  return { top, left, w: el.offsetWidth, h: el.offsetHeight };
}

// ── 섹션
const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  const boardRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const connRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headRefs = useRef<(HTMLDivElement | null)[]>([]);
  const highestCard = useRef(-1);
  const pathLengths = useRef<Record<number, number>>({});
  const visibleRef = useRef<Set<number>>(new Set());

  // 시간 기반 애니메이션 — 스크롤 속도와 무관하게 일정 시간에 경로 이동
  const animRef = useRef<{ ci: number; startTime: number } | null>(null);
  const startedConns = useRef<Set<number>>(new Set());
  const rafRef = useRef(0);
  const ANIM_MS = 1800; // 커넥터 1개 이동 시간 (ms)

  const moveCatTo = useCallback((x: number, y: number, animated = false) => {
    const el = catRef.current;
    if (!el) return;
    el.style.visibility = "visible";
    el.style.transition = animated
      ? "left 0.4s cubic-bezier(0.22,1,0.36,1), top 0.4s cubic-bezier(0.22,1,0.36,1)"
      : "none";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  }, []);

  const placeCatAtCard = useCallback(
    (idx: number) => {
      const board = boardRef.current;
      const head = headRefs.current[idx];
      if (!board || !head) return;
      const { top, left, w, h } = getLayoutOffset(head, board);
      moveCatTo(left + w - TOKEN_W - 4, top + h - TOKEN_H - 10, true);
      highestCard.current = Math.max(highestCard.current, idx);
    },
    [moveCatTo],
  );

  // 커넥터 ci 애니메이션 시작 조건:
  //   1) 아직 시작 안 함, 다른 애니메이션 없음, 고양이가 카드 ci에 있음
  //   2) 도착 카드(ci+1)가 이미 화면에 나타난 상태여야 함
  //   3) 커넥터가 화면 안에 있음
  //   4) 카드 ci의 헤드가 뷰포트 상단 55% 이내 → 카드가 충분히 화면에 올라온 후 출발
  const tryStartAnim = useCallback((ci: number) => {
    if (startedConns.current.has(ci)) return;
    if (animRef.current) return;
    if (highestCard.current < ci) return;
    if (!visibleRef.current.has(ci + 1)) return;
    const el = connRefs.current[ci];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const head = headRefs.current[ci];
    if (head && head.getBoundingClientRect().top > window.innerHeight * 0.55)
      return;
    startedConns.current.add(ci);
    animRef.current = { ci, startTime: performance.now() };
  }, []);

  // rAF 루프: 시간 기반으로 경로 위를 easeInOutSine 곡선으로 이동
  useEffect(() => {
    const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

    const loop = () => {
      const board = boardRef.current;
      const anim = animRef.current;

      if (anim && board) {
        const { ci, startTime } = anim;
        const t = Math.min((performance.now() - startTime) / ANIM_MS, 1);
        const prog = easeInOutSine(t);

        const el = connRefs.current[ci];
        if (el) {
          const pathEl = el.querySelector("path") as SVGPathElement | null;
          if (pathEl) {
            if (!pathLengths.current[ci]) {
              pathLengths.current[ci] = pathEl.getTotalLength();
            }
            const len = pathLengths.current[ci];
            const p = pathEl.getPointAtLength(prog * len);
            const cw = el.offsetWidth;
            const ch = el.offsetHeight;
            const { top: ct, left: cl } = getLayoutOffset(el, board);
            moveCatTo(
              cl + (p.x / 820) * cw - TOKEN_W / 2,
              ct + (p.y / 120) * ch - TOKEN_H * 0.85,
            );
          }
        }

        if (t >= 1) {
          animRef.current = null;
          placeCatAtCard(ci + 1);
          // 다음 커넥터가 이미 화면에 있으면 연속 시작
          tryStartAnim(ci + 1);
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [moveCatTo, placeCatAtCard, tryStartAnim]);

  // 마운트: 최상단 스크롤 + 고양이 START 플래그 옆에 배치
  useEffect(() => {
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => {
      const board = boardRef.current;
      const start = startRef.current;
      if (!board || !start) return;
      const { top, left, w, h } = getLayoutOffset(start, board);
      moveCatTo(left + w - TOKEN_W - 8, top + h - TOKEN_H - 15);
    });
    return () => cancelAnimationFrame(id);
  }, [moveCatTo]);

  // 카드 슬라이드인 + 0번 카드 고양이 스냅
  useEffect(() => {
    const observers = PROJECTS.map((_, idx) => {
      const el = itemRefs.current[idx];
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const s = new Set(prev);
              s.add(idx);
              visibleRef.current = s;
              return s;
            });
            if (idx === 0 && highestCard.current < 0) placeCatAtCard(0);
            // 이 카드가 도착지인 커넥터(idx-1)의 애니메이션 시작 재시도
            if (idx > 0) tryStartAnim(idx - 1);
          }
        },
        { threshold: 0.25 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [placeCatAtCard]);

  // 스크롤: 커넥터 페이드인 + 화면에 들어오면 애니메이션 시작
  useEffect(() => {
    const update = () => {
      const vpBot = window.scrollY + window.innerHeight;

      for (let ci = 0; ci < connRefs.current.length; ci++) {
        const el = connRefs.current[ci];
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const elTop = rect.top + window.scrollY;
        const connOpac = (vpBot - elTop) / rect.height;
        el.style.opacity = String(
          0.15 + Math.max(0, Math.min(1, connOpac)) * 0.85,
        );

        // 커넥터가 화면에 들어오면 시간 기반 애니메이션 시작 시도
        if (connOpac >= 0) tryStartAnim(ci);
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [tryStartAnim]);

  return (
    <section className="projects-section">
      <div className="projects-title">
        <div className="projects-title-label">Projects</div>
        <p className="projects-title-sub">
          과거부터 현재까지 — 경력 프로젝트 7선
        </p>
      </div>

      <div className="board" ref={boardRef}>
        {/* 고양이 게임말 — visibility로 초기 숨김, DOM 직접 이동 */}
        <div
          ref={catRef}
          className="game-token"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 20,
            pointerEvents: "none",
            visibility: "hidden",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}cat.svg`}
            alt="고양이"
            width={TOKEN_W}
            height={TOKEN_H}
            className="cat-img"
          />
        </div>

        <div className="board-start" ref={startRef}>
          <div className="board-start-flag">
            <div className="board-start-flag-pole" />
            <div className="board-start-flag-banner">START</div>
          </div>
        </div>

        {PROJECTS.map((project, idx) => {
          const position: "left" | "right" = idx % 2 === 0 ? "left" : "right";
          const isLast = idx === PROJECTS.length - 1;
          return (
            <div
              key={project.id}
              className="board-item"
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
            >
              <div
                className={`board-item-row ${position}${visible.has(idx) ? " is-visible" : ""}`}
              >
                <ProjectCard
                  project={project}
                  stepNum={idx + 1}
                  onClick={() => setSelected(project)}
                  headRef={(el) => {
                    headRefs.current[idx] = el;
                  }}
                />
              </div>
              {!isLast && (
                <Connector
                  from={position}
                  color={CONNECTOR_COLORS[PROJECTS[idx + 1].theme as Theme]}
                  ref={(el) => {
                    connRefs.current[idx] = el;
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Projects;
