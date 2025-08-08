import ScrollAnimation from "../../scrollAnimation";
import Arch from "./arch";
import Text from "./text";

function Insights() {
  return (
    <ScrollAnimation threshold={0.8}>
      <div className={`relative w-full flex flex-col sm:gap-12 gap-6 sm:mt-0 mt-16 items-center h-96`}>
        <Text />
        <Arch />
      </div>
    </ScrollAnimation>
  )
}

export default Insights;
