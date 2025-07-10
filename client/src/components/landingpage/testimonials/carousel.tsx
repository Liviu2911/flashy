import { useEffect, useState } from "react";
import type { TestimonialType } from "../../../types/testimonials";
import Testimonial from "./testimonial";

function TestimonialCarousel({ testimonials, media }: { testimonials: TestimonialType[], media?: "md" | "lg" | "xl" }) {
  const [c1, setC1] = useState("carousel");
  const [c2, setC2] = useState("");

  useEffect(() => {
    const switchC = setInterval(() => {
      setC1(prev => prev === "carousel" ? "" : "carousel");
      setC2(prev => prev === "carousel" ? "" : "carousel");
    }, 5000)

    return () => clearInterval(switchC);
  }, [])

  return (
    <div className="h-[90vh] overflow-hidden">
      {c1 !== "" && (
        <div className={c1 + ` flex-col gap-6`}>
          {testimonials.map(t => (
            <Testimonial
              photo={t.photo}
              name={t.name}
              text={t.text}
              job={t.job}
            />
          ))}
        </div>
      )}

      {c2 !== "" && (
        <div className={c2 + ` flex-col gap-6`}>
          {testimonials.map(t => (
            <Testimonial
              photo={t.photo}
              name={t.name}
              text={t.text}
              job={t.job}
            />
          ))}
        </div>

      )}
    </div>

  )
}

export default TestimonialCarousel;
