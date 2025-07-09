import type { Meta, StoryObj } from '@storybook/react';
import "../style/index.css"
import "../style/landing.css"

import Navbar from '../components/navbar';
const meta = {
  component: () => (
    <div className="text-stone-200 w-full h-[100vh] bg-black absolute left-0 top-0">
      <Navbar />
    </div>
  ),
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Drop Down Navbar",
  },
};
