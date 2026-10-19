import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  component: Input,
  tags: ['autodocs'],
  args: {
    label: '이메일',
    placeholder: 'name@example.com',
  },
  decorators: [
    (Story) => (
      <div className="max-w-measure">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Filled: Story = {
  args: { defaultValue: 'jisun@example.com' },
}

export const WithError: Story = {
  args: { defaultValue: 'jisun@', error: '이메일 형식이 아니에요' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

/* ---------- 한눈에 보기 (hover·focus-visible은 마우스·Tab으로 확인) ---------- */

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-24">
      <Input label="기본" placeholder="name@example.com" />
      <Input label="입력됨" defaultValue="jisun@example.com" />
      <Input label="오류" defaultValue="jisun@" error="이메일 형식이 아니에요" />
      <Input label="비활성" placeholder="name@example.com" disabled />
    </div>
  ),
}
