import type { Meta, StoryObj } from '@storybook/react';
import "../../../../style/index.css"
import "../../../../style/landing.css"
import Testimonial from '.';

const meta = {
  title: "Testimonial",
  component: () => (
    <div className="text-stone-200 w-full h-[100vh] bg-black absolute left-0 top-0">
      <Testimonial testimonial={{
        photo: "",
        name: "pavel",
        job: "clown",
        text: ""
      }} />
    </div>
  ),
} satisfies Meta<typeof Testimonial>;

export default meta;

type Story = StoryObj<typeof Testimonial>

export const Primary: Story = {}
