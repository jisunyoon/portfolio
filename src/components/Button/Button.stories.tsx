import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta = {
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    children: '현장 닫기',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/* ---------- primary ---------- */

export const Primary: Story = {}

export const PrimaryDisabled: Story = {
  args: { disabled: true },
}

export const PrimaryLoading: Story = {
  args: { loading: true, children: '닫는 중' },
}

/* ---------- secondary ---------- */

export const Secondary: Story = {
  args: { variant: 'secondary', children: '취소' },
}

export const SecondaryDisabled: Story = {
  args: { variant: 'secondary', disabled: true, children: '취소' },
}

export const SecondaryLoading: Story = {
  args: { variant: 'secondary', loading: true, children: '대기' },
}

/* ---------- 한눈에 보기 (hover·focus-visible은 마우스·Tab으로 확인) ---------- */

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      <div className="flex flex-wrap items-center gap-16">
        <Button>현장 닫기</Button>
        <Button disabled>현장 닫기</Button>
        <Button loading>닫는 중</Button>
      </div>
      <div className="flex flex-wrap items-center gap-16">
        <Button variant="secondary">취소</Button>
        <Button variant="secondary" disabled>
          취소
        </Button>
        <Button variant="secondary" loading>
          대기
        </Button>
      </div>
    </div>
  ),
}
