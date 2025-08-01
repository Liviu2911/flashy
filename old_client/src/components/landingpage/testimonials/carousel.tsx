// import useAnimation from "../../../hooks/useanimation";
import type { TestimonialType } from "../../../types/testimonials";
import Testimonial from "./testimonial/index";
import { useEffect, useState } from "react";

type Props = {
  testimonials: TestimonialType[]
  duration: number
}

function Carousel({ duration, testimonials }: Props) {
  const [active, setActive] = useState(false);

  // useAnimation(() => {
  //   setC1(prev => prev === "carousel" ? "hidden" : "carousel");
  //   setC2(prev => prev === "carousel" ? "hidden" : "carousel");
  // }, duration)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => !prev)
    }, duration * 1000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="h-[90vh] overflow-hidden">
      <div key={duration + "carousel1"} style={{ animationDuration: duration + 's' }} className={active ? "carousel flex flex-col gap-4" : "hidden"}>
        {testimonials.map((t, index) => (
          <Testimonial testimonial={t} key={index + t.name} />
        ))}
      </div>
      <div key={duration + "carousel2"} style={{ animationDuration: duration + 's' }} className={!active ? "carousel flex flex-col gap-4" : "hidden"}>
        {testimonials.map((t, index) => (
          <Testimonial testimonial={t} key={index + "2" + t.name} />
        ))}
      </div>

    </div>
  )
}

export default Carousel;
