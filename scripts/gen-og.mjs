import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const rootDir    = path.join(__dirname, '..');
const profileSvg = readFileSync(path.join(rootDir, 'public/profile_img_1.svg'));
const profileUrl = `data:image/svg+xml;base64,${profileSvg.toString('base64')}`;

const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width: 1200px; height: 630px;
    background: #fdf3e3;
    font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  body::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(244,200,138,0.32) 1px, transparent 1px),
      linear-gradient(90deg, rgba(244,200,138,0.32) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .card {
    position: relative; z-index: 1;
    width: 1120px; height: 560px;
    border-radius: 16px; overflow: hidden;
    display: flex;
    box-shadow: 0 8px 40px rgba(0,0,0,0.14);
  }
  /* ── 좌 : 프로필 이미지 */
  .hero {
    width: 310px; flex-shrink: 0;
    background: #fff8f0; overflow: hidden;
  }
  .hero img {
    width: 100%; height: 100%;
    object-fit: cover; object-position: top center;
  }
  /* ── 우 : 소개·스킬 */
  .skills {
    flex: 1; background: #fdf3e3;
    padding: 44px 52px;
    display: flex; flex-direction: column;
    justify-content: center; gap: 22px;
    position: relative;
  }
  .skills::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(244,200,138,0.32) 1px, transparent 1px),
      linear-gradient(90deg, rgba(244,200,138,0.32) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .skills > * { position: relative; z-index: 1; }

  /* 이름·직함 블록 */
  .hero-info {
    padding-bottom: 18px;
    border-bottom: 1.5px solid #f4a261;
  }
  .hero-badge {
    font-size: 11px; font-weight: 800;
    letter-spacing: 2.5px; color: #c87941;
    text-transform: uppercase; margin-bottom: 8px;
  }
  .hero-name {
    font-size: 38px; font-weight: 800;
    color: #3a2010; line-height: 1.1;
  }
  .hero-sub {
    font-size: 13px; font-weight: 500;
    color: #a07850; margin-top: 6px;
  }

  /* 섹션 */
  .section { display: flex; flex-direction: column; gap: 10px; }
  .section-title {
    font-size: 10px; font-weight: 900;
    letter-spacing: 3px; color: #c87941;
    text-transform: uppercase; opacity: 0.85;
    padding-bottom: 6px;
    border-bottom: 1.5px solid #f4a261;
    display: inline-block;
  }
  .about-text {
    font-size: 13px; color: #8a6840; line-height: 1.75;
  }

  /* 스킬 그룹 */
  .group { display: flex; flex-direction: column; gap: 7px; }
  .group-label {
    font-size: 8px; font-weight: 800;
    letter-spacing: 2px; color: #c4a080;
    text-transform: uppercase;
  }
  .chips { display: flex; flex-wrap: wrap; gap: 7px; }
  .chip {
    font-size: 11.5px; font-weight: 500;
    padding: 5px 15px; border-radius: 100px;
    border: 1.5px solid #f4a261; color: #c87941;
  }
</style>
</head>
<body>
  <div class="card">
    <div class="hero">
      <img src="${profileUrl}" alt="이우현" />
    </div>
    <div class="skills">
      <div class="hero-info">
        <div class="hero-badge">Portfolio · Frontend Developer</div>
        <h1 class="hero-name">이우현</h1>
        <p class="hero-sub">디자인부터 프론트엔드까지 — 총 4년 11개월</p>
      </div>

      <div class="section">
        <span class="section-title">About Me</span>
        <p class="about-text">
          디자이너로 시작해 퍼블리셔로 성장한 4년 11개월의 경험을 바탕으로,<br>
          디자인 감각과 개발 역량을 함께 갖춘 프론트엔드 개발자입니다.
        </p>
      </div>

      <div class="section">
        <span class="section-title">Skill</span>
        <div class="group">
          <span class="group-label">CORE</span>
          <div class="chips">
            <span class="chip">HTML</span>
            <span class="chip">CSS · SCSS</span>
            <span class="chip">jQuery</span>
            <span class="chip">JavaScript</span>
            <span class="chip">React</span>
            <span class="chip">TypeScript</span>
          </div>
        </div>
        <div class="group">
          <span class="group-label">DESIGN · TOOL</span>
          <div class="chips">
            <span class="chip">Photoshop</span>
            <span class="chip">Illustrator</span>
            <span class="chip">Figma</span>
            <span class="chip">Claude</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const page    = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1500)); // font render wait

const outPath = path.join(rootDir, 'public', 'og_image.png');
await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log('✓ OG image saved →', outPath);
