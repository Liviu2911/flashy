import type { Meta, StoryObj } from "@storybook/react";
import "../../../style/index.css";
import "../../../style/landing.css";
import Sidebar from ".";
import StoryBg from "../../deorators/bg";

const meta = {
  title: "Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
