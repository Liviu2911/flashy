import { motion } from "motion/react";
import HeroLabel from "./label";
import Image from "./image";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1, ease: "linear" }}
      className="flex z-40 w-full items-center flex-col sm:gap-8 gap-4 sm:mt-8 mt-4"
    >
      <HeroLabel />
      <div className="flex flex-col gap-4 justify-center">
        <div className="sm:hidden block rounded-full w-[1px] absolute top-28 left-8 z-10 opacity-50 bg-primary scale-200 glow" />
        <h1 className="text-center text-stone-200 sm:font-bold font-semibold sm:text-7xl text-2xl sm:leading-20 leading-8">
          The modern way
          <br />
          <span className="text-primary">
            of learning
          </span>
        </h1>
        {/*<h3 className="text-stone-400 font-medium text-center sm:block hidden leading-8 text-xl">
          Transform your study habits with intelligent flashcards that adapt to <br />
          your learning pace
        </h3> */}
      </div>
      <Image />
      <h3 className="text-stone-400 font-medium text-center sm:leading-8 leading-6 sm:text-xl text-sm">
        Transform your study habits with <br className="sm:hidden block" /> intelligent flashcards that <br className="sm:block hidden" />
         adapt to your learning pace.
      </h3>
    </motion.div>
  )
}

export default Hero;
