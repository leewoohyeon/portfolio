import './Hero.scss';

interface HeroProps {
  /** AI 생성 캐릭터 이미지 경로. null 이면 SVG placeholder 표시 */
  characterImgSrc?: string | null;
}

// 별 장식 위치 데이터
const STARS = [
  { size: 24, top: 28,  left: 24   },
  { size: 14, top: 52,  right: 36  },
  { size: 10, bottom: 20, left: 72 },
  { size: 16, top: 90,  left: 110  },
  { size: 12, bottom: 28, right: 88 },
] as const;

const Hero = ({ characterImgSrc = null }: HeroProps) => {
  return (
    <section className="hero">

      {/* 별 장식 */}
      {STARS.map((style, i) => (
        <i key={i} className="hero star" style={{ fontSize: style.size, ...style }}>
          ✦
        </i>
      ))}

      {/* 캐릭터 이미지 */}
      <div className={`hero character${!characterImgSrc ? ' empty' : ''}`}>
        {characterImgSrc ? (
          <img src={characterImgSrc} alt="캐릭터 이미지" />
        ) : (
          // AI 이미지 생성 후 위 img 태그로 교체
          // App.tsx에서 <Hero characterImgSrc="/images/character.png" /> 로 전달
          <>
            <svg width="80" height="80" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="28" r="18" fill="#f4c4a0" />
              <path d="M18 24 Q18 8 36 8 Q54 8 54 24 Q54 16 36 16 Q18 16 18 24Z" fill="#2a1a0a" />
              <rect x="18" y="22" width="5" height="12" rx="2.5" fill="#2a1a0a" />
              <rect x="49" y="22" width="5" height="12" rx="2.5" fill="#2a1a0a" />
              <circle cx="29" cy="27" r="2.5" fill="#2a1a0a" />
              <circle cx="43" cy="27" r="2.5" fill="#2a1a0a" />
              <circle cx="30" cy="26" r="1" fill="#fff" />
              <circle cx="44" cy="26" r="1" fill="#fff" />
              <ellipse cx="25" cy="31" rx="4" ry="2.5" fill="#f4a080" opacity="0.45" />
              <ellipse cx="47" cy="31" rx="4" ry="2.5" fill="#f4a080" opacity="0.45" />
              <path d="M31 34 Q36 38 41 34" stroke="#c87060" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <rect x="22" y="47" width="28" height="18" rx="6" fill="#f4a261" />
              <rect x="31" y="44" width="10" height="6" rx="3" fill="#f4c4a0" />
            </svg>
            <span className="hero character placeholder-label">캐릭터 이미지 교체 예정</span>
          </>
        )}
      </div>

      <div className="hero badge">Frontend Developer · Publisher</div>
      <h1 className="hero name">이우현</h1>
      <p className="hero role">디자인부터 프론트엔드까지 — 총 4년 11개월</p>
      <p className="hero desc">
        디자이너로 커리어를 시작해 퍼블리셔로 성장한 개발자.<br />
        디자인 의도를 정확히 읽고, 개발자와 원활하게 협업합니다.
      </p>

    </section>
  );
};

export default Hero;
