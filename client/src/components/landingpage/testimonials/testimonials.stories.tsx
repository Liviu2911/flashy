import type { Meta, StoryObj } from '@storybook/react';
import "../../../style/index.css"
import "../../../style/landing.css"
import Testimonials from '.';

const meta = {
  title: "Testimonials",
  component: Testimonials,
  decorators: [
    (Story) => (
      <div className="text-stone-200 w-full h-[100vh] bg-black absolute left-0 top-0">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Testimonials>;

export default meta;

type Story = StoryObj<typeof Testimonials>

export const Primary: Story = {}
