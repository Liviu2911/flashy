import type { Meta, StoryObj } from '@storybook/react';
import "../../../style/index.css"
import "../../../style/landing.css"
import RegisterForm from '.';
import StoryBg from '../../deorators/bg';

const meta = {
  title: "RegisterForm",
  component: RegisterForm,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    )
  ]
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
