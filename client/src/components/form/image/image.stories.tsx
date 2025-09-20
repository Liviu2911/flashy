import type { Meta, StoryObj } from '@storybook/react';
import "../../../style/index.css"
import "../../../style/landing.css"
import FormImage from '.';
import StoryBg from '../../deorators/bg';

const meta = {
  title: "FormImage",
  component: FormImage,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    )
  ]
} satisfies Meta<typeof FormImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
