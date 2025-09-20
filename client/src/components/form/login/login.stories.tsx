import type { Meta, StoryObj } from '@storybook/react';
import "../../../style/index.css"
import "../../../style/landing.css"
import LoginForm from '.';
import StoryBg from '../../deorators/bg';

const meta = {
  title: "LoginForm",
  component: LoginForm,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    )
  ]
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
