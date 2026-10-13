import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// tokens.css에서 Tailwind 기본값을 지우고 이름을 새로 붙인 토큰들.
// 등록하지 않으면 text-small(크기)을 글자색으로 오해해 text-text와 충돌한다고 보고 지워버린다.
// tokens.css에 토큰을 추가하면 여기도 같이 추가할 것.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['display', 'title', 'subtitle', 'body', 'small', 'label'],
      spacing: ['touch'],
      radius: ['base', 'pill'],
      shadow: ['card'],
    },
  },
})

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
