import Badge from "../../badge";
import { BsStars } from "react-icons/bs";
import FeaturesComp from "./features";
import ScrollAnimation from "../../scrollAnimation";

function Features() {
  return (
    <ScrollAnimation threshold={0.4}>
      <div className="flex flex-col gap-8 items-center w-full p-12 sm:mt-12">
        <Badge Icon={BsStars} text="Features" />

        <div className="flex flex-col text-center gap-2">
          <h1 className="sm:text-4xl text-xl font-bold text-gray-200">
            Why people love Flashy
          </h1>
          <h3 className="sm:text-xl font-medium text-gray-400">
            Discover the features that make learning more effective and enjoyable
          </h3>
        </div>

        <FeaturesComp />
      </div>
    </ScrollAnimation>
  )
}

export default Features;
