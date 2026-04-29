import { useState, useEffect } from 'react';
import './styles/global.scss';
import './App.scss';
import Intro    from './components/Intro/Intro';
import Hero     from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills   from './components/Skills/Skills';
import Contact  from './components/Contact/Contact';

const App = () => {
  const [flipped, setFlipped] = useState(false);
  const [gone, setGone]       = useState(false);

  useEffect(() => {
    if (!gone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [gone]);

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
        <div className="bg-pixels" aria-hidden="true">
          <span className="bg-pixel bp1" />
          <span className="bg-pixel bp2" />
          <span className="bg-pixel bp3" />
          <span className="bg-pixel bp4" />
          <span className="bg-pixel bp5" />
          <span className="bg-pixel bp6" />
          <span className="bg-pixel bp7" />
          <span className="bg-pixel bp8" />
        </div>

        <div className="id-card-wrap">
          <div className="id-card-section">
            <Hero characterImgSrc={`${import.meta.env.BASE_URL}profile_img_1.svg`} />
            <Skills />
          </div>
        </div>

        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
