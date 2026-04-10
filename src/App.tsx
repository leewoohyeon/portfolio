import './styles/global.scss';
import Hero     from './components/Hero/Hero';
import About    from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills   from './components/Skills/Skills';
import Contact  from './components/Contact/Contact';

/**
 * 캐릭터 이미지 적용:
 * 1. public/images/character.png 에 이미지 저장
 * 2. <Hero characterImgSrc="/images/character.png" />
 */
const App = () => {
  return (
    <div style={{ background: '#fdf3e3', minHeight: '100vh' }}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
