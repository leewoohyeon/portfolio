export type Theme = 'amber' | 'purple' | 'teal' | 'blue' | 'pink' | 'orange';

export interface Project {
  id: number;
  name: string;
  period: string;
  team: string;
  role: string;
  tags: string[];
  url: string | null;
  theme: Theme;
  imgSrc: string | null;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: '엔지니어링 빅데이터 플랫폼',
    period: '2023.07 – 12',
    team: '한국생산기술연구원 · 10명',
    role: 'UI/UX 디자인 전담 · 웹·모바일 반응형 퍼블리싱 · Swiper 슬라이드 구현',
    tags: ['HTML/CSS', 'jQuery', 'Illustrator', 'Photoshop'],
    url: 'bigdata-eng.com',
    theme: 'amber',
    imgSrc: '/project_img_01.png',
  },
  {
    id: 2,
    name: 'ezPass Cloud Service',
    period: '2023.12 – 2024.10',
    team: '유니온바이오메트릭스 · 8명',
    role: 'React 기반 퍼블리싱 · 반응형 UI · 컴포넌트 단위 재사용 화면 구성',
    tags: ['React', 'JavaScript'],
    url: 'ezpasscloud.com',
    theme: 'purple',
    imgSrc: null,
  },
  {
    id: 3,
    name: '출입통제체계 통합서버 구축',
    period: '2024.09 – 12',
    team: '유니온바이오메트릭스 · 7명',
    role: 'UI/UX 디자인 · Bootstrap 그리드 반응형 레이아웃 · CSS 커스터마이징',
    tags: ['Bootstrap', 'HTML/CSS', 'JavaScript', 'Photoshop'],
    url: null,
    theme: 'teal',
    imgSrc: null,
  },
  {
    id: 4,
    name: 'PERFORMAX 플랫폼',
    period: '2025.01 – 10',
    team: '유니온바이오메트릭스 · 4명',
    role: '공지·게시판·휴가관리 화면 개발 · API 연동 · 서버 데이터 UI 바인딩',
    tags: ['React', 'JavaScript'],
    url: null,
    theme: 'blue',
    imgSrc: null,
  },
  {
    id: 5,
    name: '놀러오개 반려견 관리 플랫폼',
    period: '2025.10 – 11',
    team: '유니온바이오메트릭스 · 4명',
    role: '관리자 화면 개발 · CRUD 구현 · API 연동 · 파트너사 협업',
    tags: ['React', 'JavaScript', 'MUI'],
    url: null,
    theme: 'pink',
    imgSrc: null,
  },
  {
    id: 6,
    name: 'AlpetaX 출입통제 플랫폼',
    period: '2025.11 – 진행중',
    team: '유니온바이오메트릭스 · 4명',
    role: 'Figma 기반 화면 퍼블리싱 · React·TS 공통 컴포넌트 · 상태값 렌더링 분기',
    tags: ['React', 'TypeScript', 'SCSS', 'Figma'],
    url: null,
    theme: 'orange',
    imgSrc: null,
  },
];

export const THEME_COLORS: Record<Theme, { imgBg: string; accent: string }> = {
  amber:  { imgBg: '#fdf8ec', accent: '#d4a044' },
  purple: { imgBg: '#f5f3fd', accent: '#9b87d6' },
  teal:   { imgBg: '#f0faf7', accent: '#4db8a0' },
  blue:   { imgBg: '#f4f6fe', accent: '#7b9ee0' },
  pink:   { imgBg: '#fff5f8', accent: '#e07b9a' },
  orange: { imgBg: '#fff8f0', accent: '#f4a261' },
};

export const CONNECTOR_COLORS: Record<Theme, string> = {
  amber:  '#d4a044',
  purple: '#9b87d6',
  teal:   '#4db8a0',
  blue:   '#7b9ee0',
  pink:   '#e07b9a',
  orange: '#f4a261',
};
