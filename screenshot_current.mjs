import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();

// 데스크톱
await page.setViewport({ width: 1280, height: 900 });
await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: path.join(OUT, 'current_desktop.png'), fullPage: true });
console.log('✓ current_desktop.png');

// 모바일
await page.setViewport({ width: 390, height: 844 });
await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: path.join(OUT, 'current_mobile.png'), fullPage: true });
console.log('✓ current_mobile.png');

await browser.close();
console.log('완료: screenshots/ 폴더 확인');
