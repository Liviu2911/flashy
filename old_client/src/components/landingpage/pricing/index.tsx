import { Link } from "@tanstack/react-router";
import FreeCard from "./freecard";
import PremiumCard from "./premiumcard";
import { FaArrowRightLong } from "react-icons/fa6";

function Pricing() {
  return (
    <div className="sm:flex hidden flex-col gap-8 items-center mt-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl text-primary font-semibold">Pricing</h1>
        <h3 className="text-stone-600">Try it for yourself for free then get to the next level</h3>
      </div>

      <div className="w-full flex flex-row justify-center gap-12">
        <FreeCard />
        <PremiumCard />
      </div>

      <Link to="/" className="flex flex-row gap-2 items-center rounded py-2 px-4 text-primary font-medium bg-stone-800 opacity-80 hover:opacity-100 transition-all">
        <h1>Try Premium Now</h1>
        <span className="text-sm">
          <FaArrowRightLong />
        </span>
      </Link>
    </div>
  )
}

export default Pricing;
