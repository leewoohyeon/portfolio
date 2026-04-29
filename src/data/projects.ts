export type Theme =
  | "amber"
  | "purple"
  | "teal"
  | "blue"
  | "pink"
  | "orange"
  | "seafoam";

export interface Project {
  id: number;
  name: string;
  period: string;
  excerpt: string;
  role: string;
  tags: string[];
  contribution: string;
  url?: string;
  theme: Theme;
  imgSrc: string | string[] | null;
  projectInfo?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "엔지니어링 빅데이터 플랫폼",
    period: "2023.07 – 2023.12",
    role: "UI/UX 디자인 · 웹·모바일 반응형 퍼블리싱 · Swiper 슬라이드 구현",
    tags: ["HTML/CSS", "jQuery", "Photoshop", "Illustrator"],
    contribution: "20%",
    url: "bigdata-eng.com",
    excerpt:
      "엔지니어링 분야의 빅데이터를 수집·분석하여 정보를 제공하는 데이터 플랫폼",
    theme: "amber",
    imgSrc: [
      "project_img_01.png",
      "modal_01_slide_img_2.png",
      "modal_01_slide_img_3.png",
    ],
    projectInfo:
      "엔지니어링 분야의 빅데이터를 수집·분석하여 정보를 제공하는 데이터 플랫폼 구축 프로젝트에 참여했습니다. 기획서를 기반으로 UI/UX 디자인과 웹·모바일 반응형 퍼블리싱을 전담했으며, Swiper 라이브러리를 활용해 슬라이드 UI를 구현했습니다. 데이터 중심 서비스 특성에 맞춰 다양한 레이아웃을 구성하고, 반응형 수정 요청에 따라 기존 마크업 구조를 보완하며 화면을 개선했습니다.",
  },
  {
    id: 2,
    name: "ezPass Cloud Service",
    period: "2023.12 – 2024.10",
    role: "React 기반 퍼블리싱 · 반응형 UI · 컴포넌트 단위 재사용 화면 구성",
    tags: ["React", "MUI", "CSS"],
    contribution: "30%",
    url: "ezpasscloud.com",
    excerpt:
      "기업용 전자결재, 근태 관리, 업무 포털 기능을 제공하는 클라우드 그룹웨어 서비스",
    theme: "purple",
    imgSrc: [
      "project_img_02.png",
      "modal_02_slide_img_2.png",
      "modal_02_slide_img_3.png",
    ],
    projectInfo:
      "기업용 전자결재, 근태 관리, 업무 포털 기능을 제공하는 클라우드 그룹웨어 서비스 프로젝트에 참여했습니다. React 기반 프론트엔드 퍼블리싱과 반응형 UI 구현을 담당했으며, 컴포넌트 단위로 화면을 구성하였습니다. 공통 요소를 재사용하는 방식으로 화면을 정리하며 컴포넌트 중심의 퍼블리싱 업무를 수행했습니다.",
  },
  {
    id: 3,
    name: "출입통제체계 통합서버 구축",
    period: "2024.09 – 2024.12",
    role: "UI/UX 디자인 · Bootstrap 그리드 반응형 레이아웃 · CSS 커스터마이징",
    tags: ["Bootstrap", "HTML/CSS", "JavaScript", "Photoshop", "Illustrator"],
    contribution: "20%",
    excerpt: "군 관련 시설의 출입 관리 웹 서비스 구축 프로젝트",
    theme: "teal",
    imgSrc: [
      "project_img_03.png",
      "modal_03_slide_img_2.png",
      "modal_03_slide_img_3.png",
    ],
    projectInfo:
      "군 관련 시설의 출입을 관리하는 웹 서비스 구축 프로젝트에서 UI/UX 디자인과 퍼블리싱을 담당했습니다. Bootstrap 프레임워크를 도입해 그리드 시스템 기반의 안정적인 반응형 레이아웃을 구성함과 동시에 프로젝트 요구사항에 맞춘 CSS 커스터마이징을 적용하였습니다.",
  },
  {
    id: 4,
    name: "PERFORMAX 플랫폼",
    period: "2025.01 – 2025.10",
    role: "프론트엔드 개발 · 반응형 화면 구현 · CRUD · API 연동",
    tags: ["React", "JavaScript", "MUI"],
    contribution: "30%",
    excerpt: "근태 및 영업 관리를 지원하는 사내 업무 관리 시스템 웹 서비스",
    theme: "blue",
    imgSrc: [
      "project_img_04.png",
      "modal_04_slide_img_2.png",
      "modal_04_slide_img_3.png",
    ],
    projectInfo:
      "근태 및 영업 관리를 지원하는 사내 업무 관리 시스템 구축 프로젝트에 참여했습니다. React 기반으로 화면을 구현하고 반응형 페이지 수정을 담당했으며, MUI 컴포넌트를 활용해 일관된 UI를 구성했습니다. 백엔드 API와 연동하여 데이터 조회·등록·수정·삭제(CRUD) 기능을 구현했습니다.",
  },
  {
    id: 5,
    name: "놀러오개 반려견 관리 플랫폼",
    period: "2025.10 – 2025.11",
    role: "프론트엔드 개발 · CRUD · API 연동",
    tags: ["React", "JavaScript", "MUI"],
    contribution: "30%",
    excerpt: "반려견 유치원, 호텔 출입 관리 플랫폼",
    theme: "pink",
    imgSrc: [
      "project_img_05.png",
      "modal_05_slide_img_2.png",
      "modal_05_slide_img_3.png",
    ],
    projectInfo:
      "반려견 관리 플랫폼의 관리자 웹 화면 개발을 담당했으며, React 및 MUI 기반으로 고객·반려견 정보 CRUD 기능을 구현했습니다. 외부 파트너사와 협업 시 기획서에 빠진 상세 조건이나 실제 API 데이터가 다른 부분들을 꼼꼼히 체크하여 피드백을 주고받았습니다.",
  },
  {
    id: 6,
    name: "AlpetaX 출입통제 플랫폼",
    period: "2025.11 – 2026.03",
    role: "Figma 기반 화면 퍼블리싱 · React·TS 공통 컴포넌트 개발",
    tags: ["React", "TypeScript", "SCSS", "Figma"],
    contribution: "25%",
    excerpt: "보안·출입관리 및 단말기 관리 플랫폼",
    theme: "orange",
    imgSrc: [
      "project_img_06.png",
      "modal_06_slide_img_2.png",
      "modal_06_slide_img_3.png",
    ],
    projectInfo:
      "AlpetaX 보안·출입관리 및 단말기 관리 플랫폼 구축 프로젝트에 참여하여, Figma 디자인과 가이드를 분석하고 화면 퍼블리싱 및 스타일링을 담당했습니다. React·TypeScript 환경에서 공통 컴포넌트 구조를 기반으로 UI를 구현했으며, 상태값에 따른 렌더링 분기와 기본 이벤트 동작을 적용해 화면 기능을 개발했습니다. 화면 구현 과정에서 타입 정의를 반영하고 타입 오류를 점검하며 안정적으로 기능을 적용했습니다.",
  },
  {
    id: 7,
    name: "완도해양치유센터 플랫폼",
    period: "2026.04 – 진행중",
    role: "Figma 기반 사용자 포탈 프론트엔드 개발",
    tags: ["React", "TypeScript", "SCSS", "Figma"],
    contribution: "20%",
    excerpt: "해양자원 기반 웰니스 프로그램 예약·안내 플랫폼",
    url: "center.wandohealing.or.kr",
    theme: "seafoam",
    imgSrc: [
      "project_img_07.png",
      "modal_07_slide_img_2.png",
      "modal_07_slide_img_3.png",
    ],
    projectInfo:
      "완도의 해조류·해수 등 천연 해양자원을 활용한 근골격계 재활 및 스트레스 완화 특화 웰니스 센터의 공식 플랫폼입니다. 프로그램 소개, 온라인 예약, 시설 안내 등 사용자 여정 전반을 지원하는 프론트엔드 개발에 참여하였습니다.",
  },
];

export const THEME_COLORS: Record<Theme, { imgBg: string; accent: string }> = {
  amber: { imgBg: "#fdf8ec", accent: "#d4a044" },
  purple: { imgBg: "#f5f3fd", accent: "#9b87d6" },
  teal: { imgBg: "#f0faf7", accent: "#4db8a0" },
  blue: { imgBg: "#f4f6fe", accent: "#7b9ee0" },
  pink: { imgBg: "#fff5f8", accent: "#e07b9a" },
  orange: { imgBg: "#fff8f0", accent: "#f4a261" },
  seafoam: { imgBg: "#f0f8fa", accent: "#6aabb5" },
};

export const CONNECTOR_COLORS: Record<Theme, string> = {
  amber: "#d4a044",
  purple: "#9b87d6",
  teal: "#4db8a0",
  blue: "#7b9ee0",
  pink: "#e07b9a",
  orange: "#f4a261",
  seafoam: "#6aabb5",
};
