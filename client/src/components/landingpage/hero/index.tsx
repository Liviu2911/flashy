import { Link } from "@tanstack/react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "./header";
import HeaderLink from "./headerlink";
import HeroImage from "./heroimage";
import { motion } from "motion/react";

function Hero() {
  return (
    <div className="w-full gap-10 flex flex-col mt-10 z-40 items-center">
      <HeaderLink />
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link className="flexi-center gap-2 rounded-lg px-4 py-2 bg-stone-800 text-stone-400 hover:bg-stone-900 hover:text-stone-300 transition-all" to="/">
          Get started for free
          <span>
            <FaArrowRightLong />
          </span>
        </Link>
      </motion.div>
      <HeroImage />
    </div>
  )
}

export default Hero;
