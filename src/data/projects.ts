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
      "입사 후 처음으로 맡은 프로젝트입니다. 프로젝트 단위 업무가 처음이었던 만큼, 기획서를 읽는 방법이나 퍼블리셔와 개발자의 역할 경계를 파악하는 데 초반에 어려움이 있었습니다. 이를 계기로 기획자, 개발자와 적극적으로 소통하며 모호한 부분은 적극적으로 질문하고 조율하는 협업 방식을 익혔습니다. 이 경험이 이후 프로젝트에서도 원활한 협업의 기반이 되었습니다.",
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
      "HTML·CSS에서 React로 처음 전환한 프로젝트입니다. 이 프로젝트를 계기로 React를 본격적으로 공부하기 시작했으나, 훅과 컴포넌트 개념이 익숙하지 않아 기존 방식과의 차이에 초반에 어려움이 있었습니다. 직접 사용하며 컴포넌트 구조에 대한 이해를 쌓았고, 개발자가 미처 다루지 못한 반응형 작업에 집중하며 실질적인 기여를 할 수 있었습니다. MUI 라이브러리를 활용한 스타일링도 시행착오를 거치며 익혀, React 기반 개발의 장점을 체감한 프로젝트입니다.",
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
      "Bootstrap을 처음 실무에 적용한 프로젝트입니다. 개념은 알고 있었지만 직접 사용하는 것은 처음이었던 만큼, 기존 스타일 코드를 파악하고 불필요한 속성을 걸러내며 커스텀하는 과정에서 어려움이 있었습니다. 이를 통해 프레임워크의 구조를 실무 수준에서 이해하고, 효율적으로 활용하는 방법을 익혔습니다",
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
      "처음으로 프론트엔드 개발을 담당한 프로젝트입니다. 신규 페이지 개발과 CRUD 기반의 API 연동 및 기능 구현을 맡았으며, 반응형 UI도 함께 고려하여 개발했습니다. API 연동이 처음이었던 만큼 요청과 응답 흐름을 이해하는 데 초반에 어려움이 있었지만, 직접 구현하며 데이터 흐름을 파악하게 되었고 기능이 동작하는 과정에서 개발의 흥미를 느낄 수 있었던 프로젝트입니다",
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
      "이전 PERFORMAX 프로젝트의 소스를 기반으로 UI 및 공통 컴포넌트 작업을 진행한 프로젝트입니다. 반응형 작업과 CRUD 기반의 API 연동을 담당했으며, 타 업체와의 첫 협업인 만큼 기획서와 실제 데이터 간의 불일치 문제가 발생해 백엔드 개발자와 긴밀하게 소통하며 조율했습니다. 서로 다른 사무실에서 협업하다 보니 의사소통과 오류 대응에 시간이 걸리는 어려움이 있었지만, 점차 적응하며 협업 방식을 익혔습니다. 또한 이전 프로젝트보다 로직이 비교적 단순해 API 흐름을 더 깊이 이해하는 데 도움이 된 프로젝트입니다.",
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
      "TSX와 SCSS를 사용해 UI 라이브러리 없이 컴포넌트를 직접 설계하고 구현한 프로젝트입니다. 이전까지 JSX와 UI 라이브러리 위주로 개발해왔던 만큼, TSX로 전환하며 두 방식의 차이를 이해하는 데 초반에 어려움이 있었습니다. 그럼에도 공통 컴포넌트를 처음으로 직접 설계하며 props와 type 정의 방식을 익혔고, 재사용 가능한 컴포넌트 구조를 고민하고 구현하는 경험을 쌓았습니다. 라이브러리에 의존하지 않고 SCSS로 스타일링을 직접 작성하며 컴포넌트의 구조와 스타일을 주도적으로 설계할 수 있었던 프로젝트입니다.",
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
      "Hero UI 라이브러리와 Tailwind CSS를 사용한 프로젝트입니다. 평소 학습으로만 접했던 Tailwind를 처음으로 실무에 적용한 사례입니다. 프로젝트 막바지에 투입되어 기존 코드 구조와 프로젝트 규칙을 파악하는 데 초반에 시간이 소요되었지만, Claude AI를 적극 활용해 코드 분석과 오류 해결 속도를 높이며 빠르게 적응할 수 있었습니다. 새로운 도구를 실무에 적용하는 것과 동시에 AI를 업무에 효율적으로 활용하는 방식을 익힌 프로젝트입니다.",
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
