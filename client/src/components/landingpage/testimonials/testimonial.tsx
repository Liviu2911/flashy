import type { TestimonialType } from "../../../types/testimonials";

function Testimonial({ photo, name, text, job }: TestimonialType) {
  return (
    <div className="rounded-lg border border-stone-600 p-4 flex flex-col justify-between w-96 h-48">
    <div className="flex flex-col gap-1">
      <p>{text}</p>
      <span>
      ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
      </span>
    </div>
      <div className="flex flex-row gap-4 text-stone-400 items-center">
        <img src={photo} className="w-8 h-8 rounded-full" />
        <div>
          <h1>{name}</h1>
          <h3>{job}</h3>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
