// Replace react with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react';
import "../style/index.css"
import "../style/landing.css"

import DropDown from '../components/navbar/features/dropdown';

const meta = {
  component: () => (
    <div className="w-full h-[100vh] bg-black absolute left-0 top-0">
      <DropDown />
    </div>
  ),
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Drop Down Menu",
  },
};
