import { useState, useEffect } from 'react';
import './styles/global.scss';
import './App.scss';
import Hero     from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills   from './components/Skills/Skills';
import Contact  from './components/Contact/Contact';

type Theme = 'light' | 'dark';

const App = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <div className="app">

      {/* 테마 토글 */}
      <button className="theme-toggle" onClick={toggle} aria-label="테마 전환">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <Hero characterImgSrc="/profile_img_3.png" />

      <div className="game-section">
        <Skills />
      </div>

      <Projects />
      <Contact />
    </div>
  );
};

export default App;
