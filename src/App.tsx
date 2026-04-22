import { useState, useEffect } from 'react';
import './styles/global.scss';
import './App.scss';
import Intro    from './components/Intro/Intro';
import Hero     from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills   from './components/Skills/Skills';
import Contact  from './components/Contact/Contact';

type Theme = 'light' | 'dark';

const App = () => {
  const [theme, setTheme]     = useState<Theme>('light');
  const [flipped, setFlipped] = useState(false);
  const [gone, setGone]       = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const handleStart = () => {
    setFlipped(true);
    setTimeout(() => setGone(true), 1000);
  };

  return (
    <>
      {!gone && (
        <div className={`flip-scene${flipped ? ' flipped' : ''}`}>
          <div className="flip-front">
            <Intro onStart={handleStart} />
          </div>
          <div className="flip-back" />
        </div>
      )}

      <div className={`app${gone ? '' : ' app--hidden'}`}>
        <button className="theme-toggle" onClick={toggle} aria-label="테마 전환">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <Hero characterImgSrc={`${import.meta.env.BASE_URL}profile_img_1.svg`} />

        <div className="game-section">
          <Skills />
        </div>

        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
