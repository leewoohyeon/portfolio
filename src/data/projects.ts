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
  retrospective?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "엔지니어링 빅데이터 플랫폼",
    period: "2023.07 – 2023.12",
    role: "UI/UX 디자인 · 웹·모바일 반응형 퍼블리싱 · Swiper 슬라이드 구현",
    tags: ["HTML/CSS", "jQuery", "Photoshop", "Illustrator"],
    contribution: "70%",
    url: "bigdata-eng.com",
    excerpt:
      "엔지니어링 분야의 빅데이터를 수집·분석하여 정보를 제공하는 데이터 플랫폼",
    theme: "amber",
    imgSrc: [
      "project_img_01.png",
      "modal_01_slide_img_2.png",
      "modal_01_slide_img_3.png",
    ],
    retrospective:
      "퍼블리셔로 입사 후 처음 맡은 프로젝트입니다. 클래스와 스타일링 규칙이 없는 상태에서 중간에 투입되어 기존 코드를 파악해야 했고, 고객사 요청으로 반응형까지 추가되었습니다.\n\n 일정상 전체 페이지에 대한 반응형 작업은 어려워 고개사가 지정한 화면에 한해 기존 코드를 최대한 건드리지 않으면서 다양한 해상도에 대응할 수 있도록 적용하며 마무리했습니다.\n\n또한 퍼블리셔와 개발자의 업무 범위가 불명확하여 개발자와 소통하며 조율했고, 이 경험으로 커뮤니케이션의 중요성을 직접 느낄 수 있었습니다.",
  },
  {
    id: 2,
    name: "ezPass Cloud Service",
    period: "2023.12 – 2024.10",
    role: "React 기반 퍼블리싱 · 반응형 UI · 컴포넌트 단위 재사용 화면 구성",
    tags: ["React", "MUI", "CSS"],
    contribution: "75%",
    url: "ezpasscloud.com",
    excerpt:
      "기업용 전자결재, 근태 관리, 업무 포털 기능을 제공하는 클라우드 그룹웨어 서비스",
    theme: "purple",
    imgSrc: [
      "project_img_02.png",
      "modal_02_slide_img_2.png",
      "modal_02_slide_img_3.png",
    ],
    retrospective:
      "React를 처음 접한 프로젝트입니다. 초반에는 컴포넌트 개념이 낯설어 개발에 어려움이 있었지만, 직접 부딪히며 컴포넌트 구조에 대한 이해를 쌓아갔습니다.\n\n개발자가 미처 다루지 못한 반응형 작업을 맡아 진행하며 실질적인 기여를 할 수 있었고, MUI 라이브러리를 활용한 스타일링도 시행착오를 거치며 익혔습니다. 이 프로젝트를 계기로 React를 본격적으로 공부하게 되었고, React 기반 개발의 장점을 직접 체감할 수 있었습니다.",
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
    retrospective:
      "Bootstrap을 처음 실무에 적용한 프로젝트입니다. Bootstrap의 개념은 알고 있었지만 직접 사용하는 건 처음이었던 만큼, 기존 스타일을 파악하고 불필요한 속성을 걸러내며 커스텀하는 과정이 쉽지 않았습니다.\n\n또한 퍼블리싱 파일과 개발 파일이 제대로 동기화되지 않아 스타일이 깨지거나 시맨틱 구조가 어긋나는 경우가 생겼고, 개발자에게 재요청하는 과정에서 시간이 지체되는 어려움도 있었습니다.\n\n이 경험을 통해 프레임워크를 실무 수준에서 이해하고, 개발자와의 소통 및 파일 관리의 중요성을 직접 느낄 수 있었습니다.",
  },
  {
    id: 4,
    name: "PERFORMAX 플랫폼",
    period: "2025.01 – 2025.10",
    role: "프론트엔드 개발 · 반응형 화면 구현 · CRUD · API 연동",
    tags: ["React", "JavaScript", "MUI"],
    contribution: "80%",
    excerpt: "근태 및 영업 관리를 지원하는 사내 업무 관리 시스템 웹 서비스",
    theme: "blue",
    imgSrc: [
      "project_img_04.png",
      "modal_04_slide_img_2.png",
      "modal_04_slide_img_3.png",
    ],
    retrospective:
      "처음으로 프론트엔드 개발을 담당한 프로젝트입니다. 신규 페이지 개발과 CRUD 기반의 API 연동 및 기능 구현을 맡았으며, 반응형 UI도 함께 고려하여 개발했습니다.\n\nAPI 연동이 처음이었던 만큼 요청과 응답 흐름을 이해하는 데 초반에 어려움이 있었지만, 직접 구현하며 데이터 흐름을 익혔고 기능이 동작하는 순간 개발의 흥미를 느낄 수 있었습니다.\n\n또한 업무 로직이 여러 페이지와 연동되어 있어 한 페이지만 수정해도 연관된 페이지까지 영향을 주는 경우가 많았습니다. 이를 통해 프로젝트 전반적인 흐름을 파악하고 있어야 한다는 것을 직접 체감한 프로젝트입니다.",
  },
  {
    id: 5,
    name: "놀러오개 반려견 관리 플랫폼",
    period: "2025.10 – 2025.11",
    role: "프론트엔드 개발 · CRUD · API 연동",
    tags: ["React", "JavaScript", "MUI"],
    contribution: "60%",
    excerpt: "반려견 유치원, 호텔 출입 관리 플랫폼",
    theme: "pink",
    imgSrc: [
      "project_img_05.png",
      "modal_05_slide_img_2.png",
      "modal_05_slide_img_3.png",
    ],
    retrospective:
      "이전 PERFORMAX 프로젝트 소스를 기반으로 진행한 프로젝트입니다. 반응형 작업과 CRUD 기반의 API 연동을 담당했으며, 타 업체와의 첫 협업인 만큼 기획서와 실제 데이터 간의 불일치 문제가 발생해 백엔드 개발자와 소통하며 조율했습니다.\n\n서로 다른 사무실에서 협업하다 보니 의사소통과 오류 대응에 시간이 걸리는 경우가 많았지만, 점차 적응하며 원격 협업 방식을 익혔습니다.\n\n이전 프로젝트보다 로직이 비교적 단순해 API 흐름을 더 깊이 이해하는 데 집중할 수 있었고, 전반적인 개발 흐름에 대한 이해를 높일 수 있었던 프로젝트입니다.",
  },
  {
    id: 6,
    name: "AlpetaX 출입통제 플랫폼",
    period: "2025.11 – 2026.03",
    role: "Figma 기반 화면 퍼블리싱 · React·TS 공통 컴포넌트 개발",
    tags: ["React", "TypeScript", "SCSS", "Figma"],
    contribution: "65%",
    excerpt: "보안·출입관리 및 단말기 관리 플랫폼",
    theme: "orange",
    imgSrc: [
      "project_img_06.png",
      "modal_06_slide_img_2.png",
      "modal_06_slide_img_3.png",
    ],
    retrospective:
      "TSX와 SCSS를 사용해 UI 라이브러리 없이 컴포넌트를 직접 설계하고 구현한 프로젝트입니다. 이전까지 JSX와 UI 라이브러리를 사용하여 개발해왔으나, TSX를 사용하여 두 방식의 차이를 이해하는 데 초반에 어려움이 있었습니다.\n\n그럼에도 공통 컴포넌트를 처음으로 직접 개발하며 props와 type 정의 방식을 익혔고, 재사용 가능한 컴포넌트 구조를 고민하고 구현하는 경험을 쌓았습니다.\n\n라이브러리에 의존하지 않고 SCSS로 스타일을 직접 작성하며 컴포넌트 구조와 스타일을 주도적으로 설계할 수 있었던 프로젝트입니다.",
  },
  {
    id: 7,
    name: "완도해양치유센터 플랫폼",
    period: "2026.04 – 진행중",
    role: "Figma 기반 사용자 포탈 프론트엔드 개발",
    tags: ["React", "TypeScript", "SCSS", "Figma"],
    contribution: "30%",
    excerpt: "해양자원 기반 웰니스 프로그램 예약·안내 플랫폼",
    url: "center.wandohealing.or.kr",
    theme: "seafoam",
    imgSrc: [
      "project_img_07.png",
      "modal_07_slide_img_2.png",
      "modal_07_slide_img_3.png",
    ],
    retrospective:
      "Hero UI 라이브러리와 Tailwind CSS를 처음으로 실무에 적용한 프로젝트입니다. 프로젝트 막바지에 투입되어 기존 코드 구조와 규칙을 파악하는 데 초반에 시간이 걸렸지만, Claude AI를 적극 활용해 코드 분석과 오류 해결 속도를 높이며 빠르게 적응할 수 있었습니다.\n\n새로운 도구를 실무에 적용하는 동시에 AI를 업무에 효율적으로 활용하는 방식을 익힐 수 있었던 프로젝트입니다.",
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
