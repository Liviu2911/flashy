import type { TestimonialType } from "../../../types/testimonials";
import Carousel from "./carousel";

function Testimonials() {
  const testimonials: TestimonialType[] = [
    {
      name: "Pavel T.",
      photo: "https://images.unsplash.com/photo-1553654057-870acfcfabd1?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      job: "fish",
      text: "This has completely transformed the way I work. I’ve never felt more productive and in control. Highly recommend!"
    },
    {
      name: "Liviu P.",
      photo: "https://images.unsplash.com/photo-1568707043650-eb03f2536825?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      job: "taxi driver",
      text: "Customer service was outstanding, and the results exceeded my expectations. I’ll definitely be back!"
    },
    {
      name: "John L.",
      photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      job: "gamer",
      text: "I’ve tried many similar solutions, but this one stands out for its simplicity and effectiveness."
    },
    {
      name: "Reijnders T.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      job: "god",
      text: "I was skeptical at first, but after using this for a month, I’m genuinely impressed. It works exactly as promised."
    },
    {
      name: "Marcus",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      job: "clown",
      text: "The quality and attention to detail were amazing. You don’t find that often these days."
    },
    {
      name: "Leao R.",
      photo: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      job: "smiler",
      text: "It saved me hours every week. I can’t imagine going back to how I used to do things."
    },
    {
      name: "Messi L.",
      photo: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      job: "gud",
      text: "From start to finish, the experience was seamless. Fast, professional, and top-notch results."
    },
    {
      name: "Maurice",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      job: "coach",
      text: "I recommend this to everyone in my network. It’s rare to find something that just works this well."
    },
  ];

  return (
    <div className="flex flex-row gap-6">
      <Carousel duration="16s" testimonials={[...testimonials, ...testimonials]} />
      <div className="lg:block hidden">
        <Carousel duration="18s" testimonials={[...testimonials, ...testimonials]} />
      </div>
      <div className="md:block hidden">
        <Carousel duration="14s" testimonials={[...testimonials, ...testimonials]} />
      </div>
      <div className="sm:block hidden">
        <Carousel duration="20s" testimonials={[...testimonials, ...testimonials]} />
      </div>
    </div>
  )
}

export default Testimonials;
