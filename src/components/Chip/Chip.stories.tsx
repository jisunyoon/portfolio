import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from './Chip'

const meta = {
  component: Chip,
  tags: ['autodocs'],
  args: {
    children: 'React',
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: { selected: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Loading: Story = {
  args: { loading: true },
}

/* ---------- 한눈에 보기 (hover·focus-visible은 마우스·Tab으로 확인) ---------- */

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-8">
      <Chip>React</Chip>
      <Chip selected>React</Chip>
      <Chip disabled>React</Chip>
      <Chip loading>React</Chip>
    </div>
  ),
}
