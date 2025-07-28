import ts from "../../../assets/testimonials.json" assert { type: "json" };
import type { TestimonialType } from "../../../types/testimonials";

import Carousel from "./carousel";

function Testimonials() {
  const testimonials = ts as TestimonialType[];
  return (
    <div className="sm:flex hidden flex-col gap-8">
      <div className="flex flex-col items-center gap-12 mt-10">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-primary text-4xl font-bold">Testimonials</h1>
          <p className="text-lg text-stone-600">Trusted by users around the world</p>
        </div>
      </div>
      <div className="flex flex-row relative gap-6 w-full justify-center">
        <div className="w-full h-12 testimonials-gradient absolute top-0 z-30 left-0" />
        <div className="w-full h-12 testimonials-gradient absolute bottom-0 z-30 left-0 rotate-180" />
        <Carousel duration={58} testimonials={[...testimonials, ...testimonials]} />
        <div className="lg:block hidden">
          <Carousel duration={46} testimonials={[...testimonials, ...testimonials]} />
        </div>
        <div className="md:block hidden">
          <Carousel duration={62} testimonials={[...testimonials, ...testimonials]} />
        </div>
        <div className="sm:block hidden">
          <Carousel duration={50} testimonials={[...testimonials, ...testimonials]} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
