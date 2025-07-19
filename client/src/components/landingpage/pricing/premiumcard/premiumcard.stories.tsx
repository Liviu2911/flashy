import type { Meta, StoryObj } from "@storybook/react";
import "../../../../style/index.css";
import "../../../../style/landing.css";
import PremiumCard from ".";
import StoryBg from "../../../deorators/bg";

const meta = {
  title: "Pricing Premium Card",
  component: PremiumCard,
  decorators: [
    (Story) => (
      <StoryBg>
        <Story />
      </StoryBg>
    )
  ]
} satisfies Meta<typeof PremiumCard>

export default meta;

type Story = StoryObj<typeof PremiumCard>

export const Primary: Story = {}
