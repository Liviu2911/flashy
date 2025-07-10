import type { Meta, StoryObj } from '@storybook/react';
import "../style/index.css"
import "../style/landing.css"

import Testimonial from '../components/landingpage/testimonials/testimonial';
const meta = {
  title: "Testimonial",
  component: () => (
    <div className="text-stone-200 w-full h-[100vh] bg-black absolute left-0 top-0">
      <Testimonial
        photo=""
        name="Pavel T."
        text="A wonderful app for learning. It helped me learn new languages without any struggles."
          job="univesity teacher"
      />
    </div>
  ),
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stick: Story = {};
