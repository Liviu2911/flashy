import Header from "./header";
import HeaderLink from "./headerlink";
import HeroImage from "./heroimage";
import { motion } from "motion/react";
import GetStarted from "./getstarted";

function Hero() {
  return (
    <div className="w-full sm:gap-10 gap-4 flex flex-col sm:mt-10 z-40 items-center">
      <HeaderLink />
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <GetStarted />
      </motion.div>
      <HeroImage />
    </div>
  )
}

export default Hero;
