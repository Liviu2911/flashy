import type { Meta, StoryObj } from '@storybook/react';
import "../../style/index.css"
import "../../style/landing.css"
import Footer from '.';
import StoryBg from '../deorators/bg';

const meta = {
  title: "Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    )
  ]
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
