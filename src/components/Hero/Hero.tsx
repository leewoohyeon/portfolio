import './Hero.scss';

interface HeroProps {
  characterImgSrc?: string | null;
}

const Hero = ({ characterImgSrc = null }: HeroProps) => {
  return (
    <div className="hero-col">
      {/* 사진 */}
      <div className="hero-photo-frame">
        {characterImgSrc ? (
          <img src={characterImgSrc} alt="프로필" />
        ) : (
          <div className="hero-photo-empty">
            <svg width="80" height="80" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="28" r="18" fill="#f4c4a0" />
              <path d="M18 24 Q18 8 36 8 Q54 8 54 24 Q54 16 36 16 Q18 16 18 24Z" fill="#2a1a0a" />
              <circle cx="29" cy="27" r="2.5" fill="#2a1a0a" />
              <circle cx="43" cy="27" r="2.5" fill="#2a1a0a" />
              <path d="M31 34 Q36 38 41 34" stroke="#c87060" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <rect x="22" y="47" width="28" height="18" rx="6" fill="#f4a261" />
            </svg>
          </div>
        )}
      </div>

    </div>
  );
};

export default Hero;
