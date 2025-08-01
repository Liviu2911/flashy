import image from "../../../assets/heroimage.jpg";

function Image() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="absolute top-20 w-[68%] sm:block hidden heroimage-shadow z-10" />
      <img alt="hero image" src={image} className="w-[85%] rounded-xl z-20 border border-stone-800" />
     <div className="w-[85%] sm:h-72 h-24 hero-gradient absolute bottom-0 z-30" /> 
    </div>
  )
}

export default Image;
