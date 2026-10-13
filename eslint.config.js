import js from '@eslint/js'
import betterTailwind from 'eslint-plugin-better-tailwindcss'
import prettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import storybook from 'eslint-plugin-storybook'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    // Correctness only — class order and line wrapping are handled by prettier-plugin-tailwindcss
    extends: [betterTailwind.configs.correctness],
    settings: {
      'better-tailwindcss': { entryPoint: 'src/styles/global.css' },
    },
    rules: {
      'better-tailwindcss/no-restricted-classes': [
        'error',
        {
          restrict: [
            {
              pattern: '\\[.*\\]',
              message: '임의값 금지 — 필요한 값은 tokens.css에 먼저 추가하세요',
            },
          ],
        },
      ],
    },
  },
  storybook.configs['flat/recommended'],
  // Formatting is Prettier's job — turn off rules that conflict with it
  prettier,
])
