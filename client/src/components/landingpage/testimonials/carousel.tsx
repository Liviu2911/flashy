import type { TestimonialType } from "../../../types/testimonials";
import Testimonial from "./testimonial";
import { useEffect, useState } from "react";

type Props = {
  testimonials: TestimonialType[]
  duration: number
}

function Carousel({ duration, testimonials }: Props) {
  const [c1, setC1] = useState("carousel");
  const [c2, setC2] = useState("hidden");

  useEffect(() => {
    const switchIn = setInterval(() => {
      setC1(prev => prev === "carousel" ? "hidden" : "carousel");
      setC2(prev => prev === "carousel" ? "hidden" : "carousel");
    }, duration * 1000)

    return () => clearInterval(switchIn);
  }, [])

  return (
    <div className="h-[90vh] overflow-hidden">
      <div style={{ animationDuration: duration + 's' }} className={c1 + " flex flex-col gap-4"}>
        {testimonials.map((t, index) => (
          <Testimonial testimonial={t} key={index + t.name} />
        ))}
      </div>
      <div style={{ animationDuration: duration + 's' }} className={c2 + " flex flex-col gap-4"}>
        {testimonials.map((t, index) => (
          <Testimonial testimonial={t} key={index + t.name} />
        ))}
      </div>

    </div>
  )
}

export default Carousel;
