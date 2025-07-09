import { Link } from "@tanstack/react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "./header";
import HeaderLink from "./headerlink";
import HeroImage from "./heroimage";

function Hero() {
  return (
    <div className="w-full gap-10 flex flex-col mt-10 z-20 items-center">
      <HeaderLink />
      <Header />
      <Link className="flexi-center gap-2 rounded-lg px-4 py-2 bg-stone-800 opacity-80 hover:opacity-100 transition-all" to="/">
        Get started for free
        <span>
          <FaArrowRightLong />
        </span>
      </Link>
      <HeroImage />
    </div>
  )
}

export default Hero;
