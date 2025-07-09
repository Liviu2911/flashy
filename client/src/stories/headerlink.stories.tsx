import type { Meta, StoryObj } from '@storybook/react';
import "../style/index.css"
import "../style/landing.css"

import HeaderLink from '../components/landingpage/hero/headerlink'; 
const meta = {
  component: () => (
    <div className="w-full h-[100vh] bg-black absolute left-0 top-0">
      <HeaderLink />
    </div>
  ),
} satisfies Meta<typeof HeaderLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Drop Down Menu",
  },
};
