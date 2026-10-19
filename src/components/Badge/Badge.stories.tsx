import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'React',
  },
  argTypes: {
    status: { control: 'inline-radio', options: [undefined, 'success', 'warning', 'danger'] },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Success: Story = {
  args: { status: 'success', children: '운영 중' },
}

export const Warning: Story = {
  args: { status: 'warning', children: '점검 중' },
}

export const Danger: Story = {
  args: { status: 'danger', children: '중단' },
}

/* ---------- 한눈에 보기 ---------- */

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-8">
      <Badge>React</Badge>
      <Badge status="success">운영 중</Badge>
      <Badge status="warning">점검 중</Badge>
      <Badge status="danger">중단</Badge>
    </div>
  ),
}
