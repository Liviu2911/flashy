import type { Meta, StoryObj } from '@storybook/react';
import "../../../../../style/index.css"
import "../../../../../style/landing.css"
import DropDown from '.';

const meta = {
  title: "Drop Down Menu",
  component: DropDown,
  decorators: [
    (Story) => (
      <div className="w-full h-[100vh] bg-black absolute left-0 top-0">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
