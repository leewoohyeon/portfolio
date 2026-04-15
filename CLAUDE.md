# 포트폴리오 프로젝트 가이드

## 프로젝트 구조

```
portfolio/
├── public/                  # 정적 에셋 (이미지 등)
│   ├── profile_img_3.png    # 프로필 이미지 (Hero 섹션)
│   └── project_img_*.png    # 프로젝트 이미지
├── src/
│   ├── App.tsx              # 루트 컴포넌트 (테마 토글)
│   ├── App.scss             # 앱 레이아웃 및 테마 토글 스타일
│   ├── components/
│   │   ├── Hero/            # 프로필 상단 섹션
│   │   ├── Skills/          # 스킬 카드 (게임 장비 스타일)
│   │   ├── Projects/        # 보드 게임 스타일 프로젝트 목록
│   │   └── Contact/         # 연락처 섹션
│   ├── data/
│   │   └── projects.ts      # 프로젝트 데이터 (이곳에서 내용 수정)
│   └── styles/
│       ├── _variables.scss  # CSS 커스텀 프로퍼티 참조 변수
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

## 테마 시스템

- CSS 커스텀 프로퍼티 기반 라이트/다크 전환
- `src/styles/global.scss`의 `:root`(라이트) / `[data-theme="dark"]`(다크) 에서 색상 변경
- `src/styles/_variables.scss`의 SCSS 변수는 모두 `var(--c-xxx)` 참조

## 자주 수정하는 파일

| 수정 내용 | 파일 |
|---|---|
| 프로젝트 추가/수정 | `src/data/projects.ts` |
| 프로필 이미지 변경 | `App.tsx`의 `characterImgSrc` |
| 색상 변경 | `src/styles/global.scss` |
| Hero 텍스트 | `src/components/Hero/Hero.tsx` |
| 연락처 정보 | `src/components/Contact/Contact.tsx` |

## 이미지 추가 방법

1. `public/` 폴더에 이미지 파일 저장
2. `src/data/projects.ts`의 해당 프로젝트 `imgSrc` 에 파일명만 입력 (예: `'project_img_02.png'`)
3. 경로 앞에 `/` 붙이지 말 것 — `import.meta.env.BASE_URL`이 자동으로 붙음
