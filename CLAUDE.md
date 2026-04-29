# 포트폴리오 프로젝트 가이드

## 프로젝트 구조

```
portfolio/
├── public/                        # 정적 에셋
│   ├── profile_img_1.svg          # 프로필 이미지 (Hero 섹션) — SVG
│   ├── cat.svg                    # 보드 게임 고양이 게임말
│   ├── favicon.svg
│   ├── icons.svg
│   ├── project_img_01~07.png      # 프로젝트 썸네일
│   ├── modal_0N_slide_img_2~3.png # 프로젝트 모달 슬라이드 이미지
│   ├── character/                 # 캐릭터 SVG 파트 (body, arms, legs)
│   └── icon/                     # ic_arrow.svg, ic_close.svg
├── src/
│   ├── App.tsx              # 루트 컴포넌트 — Intro 카드플립 → 메인 전환, 테마 토글
│   ├── App.scss             # 앱 레이아웃, flip-scene, theme-toggle 스타일
│   ├── main.tsx             # 앱 진입점 (scrollRestoration 수동으로 고정)
│   ├── components/
│   │   ├── Intro/           # 게임 시작 화면 ("PRESS START") — 카드플립 후 사라짐
│   │   ├── Hero/            # 프로필 이미지 + 이름 카드
│   │   ├── Skills/          # About Me + Skill 칩 목록
│   │   ├── Projects/        # 보드게임 스타일 프로젝트 목록 + 고양이 게임말 애니메이션
│   │   └── Contact/         # 푸터 연락처 섹션
│   ├── data/
│   │   └── projects.ts      # 프로젝트 데이터 + Theme 타입 + THEME/CONNECTOR_COLORS
│   └── styles/
│       ├── _variables.scss  # CSS 커스텀 프로퍼티 참조 SCSS 변수
│       ├── global.scss      # 라이트/다크 테마 CSS 변수 정의
│       └── reset.scss       # CSS 리셋
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions 자동 배포
├── vite.config.ts           # base: '/portfolio/' 설정됨
└── CLAUDE.md                # 이 파일
```

## 개발 서버 실행

```bash
cd d:/portfolio/portfolio
npm run dev
```

로컬: http://localhost:5173

## 빌드 확인

```bash
cd d:/portfolio/portfolio
npm run build
```

오류 없이 `dist/` 생성되면 정상. SCSS deprecation warning은 무시해도 됨.

## 배포 방법

### 자동 배포 (권장)
`main` 브랜치에 커밋 & 푸시하면 GitHub Actions가 자동으로 빌드 후 배포.

```bash
cd d:/portfolio/portfolio
git add .
git commit -m "커밋 메시지"
git push origin main
```

배포 URL: https://leewoohyeon.github.io/portfolio/

### 배포 확인
GitHub → Actions 탭에서 워크플로우 상태 확인.

## 앱 흐름

1. **Intro 화면** — 게임 스타일 시작 화면 (`Intro.tsx`). "PRESS START" 버튼 클릭 시 카드플립 애니메이션 후 사라짐.
2. **메인 포트폴리오** — `App.tsx`의 `gone` 상태가 `true`가 되면 `.app` 영역이 보임.
   - `#id-card-wrap`: Hero(프로필) + Skills(소개·스킬)
   - `Projects`: 보드게임 보드 + 고양이 게임말 + 프로젝트 카드 7개
   - `Contact`: 푸터

## 테마 시스템

- CSS 커스텀 프로퍼티 기반 라이트/다크 전환
- `src/styles/global.scss`의 `:root`(라이트) / `[data-theme="dark"]`(다크) 에서 색상 변경
- 기본 색조: 따뜻한 브라운/오렌지 계열 (`--c-bg: #fdf3e3`)
- `src/styles/_variables.scss`의 SCSS 변수는 모두 `var(--c-xxx)` 참조

## 프로젝트 데이터 구조 (`src/data/projects.ts`)

```ts
interface Project {
  id: number;
  name: string;
  period: string;
  mainFunction?: string;   // 모달에 표시되는 주요기능 / 팀 정보
  role: string;
  tags: string[];
  contribution: string;    // 현재 모달에서 하드코딩 "20%" — 이 필드는 미사용
  url?: string;            // 도메인만 입력 (https:// 제외)
  theme: Theme;            // 카드 색상 테마
  imgSrc: string | string[] | null;  // 파일명만 (BASE_URL은 자동)
}

type Theme = 'amber' | 'purple' | 'teal' | 'blue' | 'pink' | 'orange' | 'seafoam';
```

현재 등록된 프로젝트: 7개 (엔지니어링 빅데이터 플랫폼 → 완도해양치유센터)

## 자주 수정하는 파일

| 수정 내용 | 파일 |
|---|---|
| 프로젝트 추가/수정 | `src/data/projects.ts` |
| 프로필 이미지 변경 | `App.tsx` — `characterImgSrc` prop (`profile_img_1.svg`) |
| 색상 변경 | `src/styles/global.scss` |
| Intro 화면 텍스트 | `src/components/Intro/Intro.tsx` |
| Hero 이름·정보 | `src/components/Hero/Hero.tsx` |
| About Me · 스킬 | `src/components/Skills/Skills.tsx` — `SKILL_GROUPS` 배열 |
| 연락처 정보 | `src/components/Contact/Contact.tsx` — `INFO` 배열, 이메일/GitHub href |

## 이미지 추가 방법

1. `public/` 폴더에 이미지 파일 저장
2. `src/data/projects.ts`의 해당 프로젝트 `imgSrc`에 파일명만 입력 (예: `'project_img_02.png'`)
3. 경로 앞에 `/` 붙이지 말 것 — `import.meta.env.BASE_URL`이 자동으로 붙음
4. 모달 슬라이드용 추가 이미지는 배열로 입력: `['project_img_02.png', 'modal_02_slide_img_2.png', ...]`

## 연락처 정보 (현재)

- 이메일: wh8187@gmail.com
- GitHub: https://github.com/leewoohyeon
- 희망지역: 서울 전 지역
