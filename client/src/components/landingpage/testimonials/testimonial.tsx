import type { TestimonialType } from "../../../types/testimonials";

type Props = {
  testimonial: TestimonialType,
}

function Testimonial({ testimonial }: Props) {
  const { text, photo, name, job } = testimonial;

  return (
    <div className={"rounded-lg border border-stone-600 p-4 flex flex-col justify-between max-w-96 h-48"}>
      <div className="flex flex-col gap-1">
        <p>{text}</p>
        <span>
          ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
        </span>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={photo} className="rounded-full w-8 h-8" />
          <h1 className="opacity-80">@{name}</h1>
        </div>
        <h1 className="opacity-80">{job}</h1>
      </div>
    </div>
  )
}

export default Testimonial;
