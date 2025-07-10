import type { Meta, StoryObj } from '@storybook/react';
import "../style/index.css"
import "../style/landing.css"

import Testimonials from '../components/landingpage/testimonials';
const meta = {
  component: () => (
    <div className="text-stone-200 w-full h-[100vh] bg-black absolute left-0 top-0">
      <Testimonials />
    </div>
  ),
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Testimonials",
  },
};
