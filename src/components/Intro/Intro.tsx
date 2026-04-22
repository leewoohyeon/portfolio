import './Intro.scss';

interface IntroProps {
  onStart: () => void;
}

const Intro = ({ onStart }: IntroProps) => {
  return (
    <div className="intro">
      <div className="intro-bg-grid" />

      <div className="intro-pixels">
        <span className="pixel p1" />
        <span className="pixel p2" />
        <span className="pixel p3" />
        <span className="pixel p4" />
        <span className="pixel p5" />
        <span className="pixel p6" />
      </div>

      <div className="intro-content">
        <div className="intro-badge">PLAYER 1</div>

        <div className="intro-title-wrap">
          <p className="intro-sub">WELCOME TO</p>
          <h1 className="intro-title">
            <span className="intro-title-line1">PORTFOLIO</span>
            <span className="intro-title-line2">START</span>
          </h1>
        </div>

        <div className="intro-cursor">▼</div>

        <button className="intro-btn" onClick={onStart}>
          ▶&nbsp;&nbsp;PRESS START
        </button>

        <p className="intro-copy">© 2025 LEE WOOHYEON</p>
      </div>
    </div>
  );
};

export default Intro;
