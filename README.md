# portfolio

Vite + React + TypeScript · Zustand · CSS Modules + design tokens

```bash
npm install
npm run dev
```

## 폴더 구조

```
src/
├─ app/          # App 루트, 레이아웃 (전역 조합)
├─ pages/        # 페이지 단위. 그 페이지에서만 쓰는 조각은 폴더 안에 함께 둠
│  └─ Home/      #   Home.tsx(조립) + Hero, About, Projects, Contact …
├─ components/   # 2곳 이상에서 쓰는 UI 컴포넌트 (Component/Component.tsx + .module.css)
├─ hooks/        # 커스텀 훅
├─ store/        # Zustand 스토어 (themeStore 등)
├─ lib/          # 유틸, 상수, 헬퍼
├─ data/         # 프로젝트·경력 등 콘텐츠 데이터
├─ assets/       # 이미지, 폰트 등 import 되는 정적 자원
└─ styles/
   ├─ tokens.css # 디자인 토큰 (색·타이포·간격·모션)
   ├─ reset.css
   └─ global.css # reset + tokens + 전역 스타일
```

- 한 페이지에서만 쓰는 컴포넌트는 그 페이지 폴더에, 여러 곳에서 쓰게 되면 `components/`로 이동
- import 경로는 `@/` 별칭 사용 (`@/components/...`)
- 토큰 출처: 캔버스 "프론트엔드 포트폴리오 — 화면 시안" › 5. 디자인 시스템
- tokens.css에 없는 색·간격·크기는 쓰지 않음. 새 값이 필요하면 tokens.css에 먼저 추가

## 다크 모드

- `useThemeStore` — `mode: 'light' | 'dark' | 'system'`, localStorage(`theme`)에 저장
- `<html data-theme="light|dark">` 로 토큰 전환
- `index.html` 인라인 스크립트가 첫 페인트 전에 테마를 적용해 깜빡임 방지
- `system` 모드일 때 OS 설정 변경을 실시간 반영
- `prefers-reduced-motion` 시 `--duration-hover`가 0으로
