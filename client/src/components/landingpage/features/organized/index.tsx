import searchAnimation from "../../../../assets/lottie/search.json";
import LottieAnimation from "../../../lottieAnimation";
import text from "../../../../assets/text.json"
import bg from "../../../../assets/blob-scene-haikei.svg"

function OrganizedFeature() {
  return (
    <div className="w-full mt-8 flex relative h-[100vh]">
      <img src={bg} alt="Background svg" className="absolute w-full z-10" />
      <p className="w-[35%] text-lg text-white z-20 absolute font-semibold left-10 bottom-72">
        {/* @ts-ignore */}
        {text.features.organized.text}
      </p>
      <div className="z-20 absolute right-0">
        <LottieAnimation animation={searchAnimation} speed={0.25} />
      </div>
      <div className="z-20 absolute text-stone-400 bottom-10 right-64">
        <h2 className="italic font-semibold">
          {/* @ts-ignore */}
          {text.features.organized.quote.text}
        </h2>
        <h3 className="flex items-center gap-2 font-medium text-sm">
        <div className="w-4 h-[1.5px] bg-stone-400" />
          {/* @ts-ignore */}
          {text.features.organized.quote.author}
        </h3>
      </div>
    </div>
  )
}

export default OrganizedFeature;
