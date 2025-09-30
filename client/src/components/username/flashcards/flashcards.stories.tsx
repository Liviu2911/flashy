import type { Meta, StoryObj } from "@storybook/react";
import "../../../style/index.css";
import "../../../style/landing.css";
import DashboradFlashcards from ".";
import StoryBg from "../../deorators/bg";

const meta = {
  title: "DashboradFlashcards",
  component: DashboradFlashcards,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    ),
  ],
} satisfies Meta<typeof DashboradFlashcards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
