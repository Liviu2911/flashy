import type { Meta, StoryObj } from "@storybook/react";
import "../../../../style/index.css";
import "../../../../style/landing.css";
import DashboradFlashcard from ".";
import StoryBg from "../../../deorators/bg";

const meta = {
  title: "DashboradFlashcard",
  component: DashboradFlashcard,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    ),
  ],
} satisfies Meta<typeof DashboradFlashcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    flashcard: {
      folder: "Greetings",
      label: "Spanish",
      front: "hello",
      back: "hola"
    }
  }
};

