import searchAnimation from "../../../../assets/lottie/search.json";
import LottieAnimation from "../../../lottieAnimation";
import text from "../../../../assets/text.json"

function OrganizedFeature() {
  return (
    <div className="flex flex-row gap-56 w-full mt-8 bg-primary justify-center items-center">
      <p className="w-[50%] text-lg text-white">{text.features.organized}</p>
      <LottieAnimation animation={searchAnimation} speed={0.25} />
    </div>
  )
}

export default OrganizedFeature;
