import type { Meta, StoryObj } from "@storybook/react";
import "../../../../style/index.css";
import "../../../../style/landing.css";
import FreeCard from ".";
import StoryBg from "../../../deorators/bg";

const meta = {
  title: "Pricing FreeCard",
  component: FreeCard,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    )
  ]
} satisfies Meta<typeof FreeCard>

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
