import type { TestimonialType } from "../../../types/testimonials";
import TestimonialCarousel from "./carousel";

function Testimonials() {
  const testimonials: TestimonialType[] = [
    {
      photo: "https://saas-magicui.vercel.app/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F12.jpg&w=96&q=75",
      name: "Pavel T.",
      job: "University Teacher",
      text: "",
    },
    {
      photo: "",
      name: "Pavel T.",
      job: "University Teacher",
      text: "",
    },
    {
      photo: "",
      name: "Pavel T.",
      job: "University Teacher",
      text: "",
    },
    {
      photo: "",
      name: "Pavel T.",
      job: "University Teacher",
      text: "",
    },

  ]
  return (
    <div className="flex flex-row gap-8">
      <TestimonialCarousel testimonials={[...testimonials, ...testimonials]} />
    </div>
  )
}

export default Testimonials;
