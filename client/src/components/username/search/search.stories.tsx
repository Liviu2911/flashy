import type { Meta, StoryObj } from '@storybook/react';
import "../../../style/index.css"
import "../../../style/landing.css"
import Search from '.';
import StoryBg from '../../deorators/bg';

const meta = {
  title: "Search",
  component: Search,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    )
  ]
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
