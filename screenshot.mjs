import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, 'screenshots');

import fs from 'fs';
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

const VIEWPORT = { width: 390, height: 844 };   // iPhone 14 크기

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport(VIEWPORT);

// ── 공통: 페이지 열기
await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 800));

// ── Version B (기본값)
await page.screenshot({ path: path.join(OUT, 'version-B.png'), fullPage: true });
console.log('✓ version-B.png 저장');

// ── Version A 버튼 클릭
await page.click('.ver-btn:first-of-type');   // "A 전체 보드 게임" 버튼
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: path.join(OUT, 'version-A.png'), fullPage: true });
console.log('✓ version-A.png 저장');

await browser.close();
console.log('\n📁 screenshots/ 폴더에 저장되었습니다.');
