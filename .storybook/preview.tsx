import type { Preview } from '@storybook/react-vite'
import '@/styles/global.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: '화면 테마',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: '라이트', icon: 'sun' },
          { value: 'dark', title: '다크', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },
  // 앱의 App.tsx와 같은 방식으로 <html data-theme>를 바꿔 다크 토큰을 적용
  decorators: [
    (Story, context) => {
      document.documentElement.dataset.theme = context.globals.theme
      return <Story />
    },
  ],
  parameters: {
    // 배경은 body의 bg-bg 토큰을 쓰므로 Storybook 배경 기능은 끈다
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
