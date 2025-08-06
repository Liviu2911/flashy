import type { Meta, StoryObj } from '@storybook/react';
import "../../../style/index.css"
import "../../../style/landing.css"
import Pricing from '.';

const meta = {
  title: "Pricing",
  component: Pricing,
  decorators: [
    (Story) => (
      <div className="text-stone-200 w-full h-[100vh] bg-black absolute left-0 top-0">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Pricing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
