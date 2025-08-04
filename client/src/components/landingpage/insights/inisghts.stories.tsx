import type { Meta, StoryObj } from '@storybook/react';
import "../../../style/index.css"
import "../../../style/landing.css"
import Insights from '.';

const meta = {
  title: "Insights",
  component: Insights,
  decorators: [
    (Story) => (
      <div className="text-stone-200 w-full h-[100vh] bg-black absolute left-0 top-0">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Insights>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
