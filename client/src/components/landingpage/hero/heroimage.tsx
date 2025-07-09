import image from "../../../assets/heroimage.jpg"

function HeroImage() {
  return (
    <div className="z-30 border-2 mt-12 hero-shadow p-1 bg-black border-stone-600 rounded-xl">
      <img src={image} width={1200} />
    </div>
  )
}

export default HeroImage;
