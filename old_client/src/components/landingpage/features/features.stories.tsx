import type { Meta, StoryObj } from '@storybook/react';
import "../../../style/index.css"
import "../../../style/landing.css"
import Features from '.';
import StoryBg from '../../deorators/bg';

const meta = {
  title: "Features Detailed",
  component: Features,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    )
  ]
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
