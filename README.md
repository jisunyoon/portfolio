# portfolio

Vite + React + TypeScript · Zustand · Tailwind CSS v4 · ESLint + Prettier

```bash
npm install
npm run dev
npm run lint     # ESLint
npm run format   # Prettier (Tailwind 클래스 순서 정렬 포함)
```

## 폴더 구조

```
src/
├─ app/          # App 루트, 레이아웃 (전역 조합)
├─ pages/        # 페이지 단위. 그 페이지에서만 쓰는 조각은 폴더 안에 함께 둠
│  └─ Home/      #   Home.tsx(조립) + Hero, About, Projects, Contact …
├─ components/   # 2곳 이상에서 쓰는 UI 컴포넌트 (Component/Component.tsx)
├─ hooks/        # 커스텀 훅
├─ store/        # Zustand 스토어 (themeStore 등)
├─ lib/          # 유틸, 상수, 헬퍼
├─ data/         # 프로젝트·경력 등 콘텐츠 데이터
├─ assets/       # 이미지, 폰트 등 import 되는 정적 자원
└─ styles/
   ├─ tokens.css # 디자인 토큰 (Tailwind @theme + 다크 값)
   └─ global.css # tailwindcss + tokens + 전역 스타일, container-page 유틸리티
```

- 한 페이지에서만 쓰는 컴포넌트는 그 페이지 폴더에, 여러 곳에서 쓰게 되면 `components/`로 이동
- import 경로는 `@/` 별칭 사용 (`@/components/...`)

## 디자인 토큰

- 출처: 캔버스 "프론트엔드 포트폴리오 — 화면 시안" › 5. 디자인 시스템
- Tailwind 기본 팔레트·간격·글자 크기는 모두 지우고 시안 값만 클래스로 둠
  - 색: `bg-bg` `bg-surface` `text-text` `text-secondary` `text-caption` `border-line` `*-accent` …
  - 글자: `text-display` `text-title` `text-subtitle` `text-body` `text-small` `text-label` (행간 포함)
  - 간격: `4 8 12 16 24 32 48 64` px 값 그대로 (`p-24` = 24px), `min-h-touch` = 44px
  - 모서리 `rounded-base`(6px) · `rounded-pill`(뱃지·칩만), 그림자 `shadow-card`(카드·모달만)
  - 폭: `container-page`(1280 + 좌우 여백), `max-w-measure`(본문 768)
- 새 값이 필요하면 tokens.css에 먼저 추가. ESLint가 다음을 오류로 잡음
  - 토큰에 없는 클래스 (`p-5`, `bg-white`, `text-sm` …)
  - 임의값 (`p-[13px]`, `text-[#fff]` …)

## 다크 모드

- `useThemeStore` — `mode: 'light' | 'dark'`, localStorage(`theme`)에 저장. 스토어는 값만 관리
- `App`의 `useEffect`가 `<html data-theme>`에 반영 → tokens.css가 같은 색 변수를 다크 값으로 덮어씀 (`dark:` 접두사 불필요)
- 첫 방문 기본값은 OS 설정
- `index.html` 인라인 스크립트가 첫 페인트 전에 테마를 적용해 깜빡임 방지
- `prefers-reduced-motion` 시 전환 시간 0
