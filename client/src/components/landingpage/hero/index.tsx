import { motion } from "motion/react";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1, ease: "linear" }}
      className="flex flex-col sm:gap-8 gap-4"
    >
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-center text-stone-200 sm:font-bold font-semibold sm:text-7xl text-2xl sm:leading-20 leading-8 sm:mt-10 mt-4">
          The modern way
          <br />
          <span className="text-primary">
            of learning
          </span>
        </h1>
        <h3 className="text-stone-400 font-medium text-center sm:block hidden leading-8 text-xl">
          Transform your study habits with intelligent flashcards that adapt to <br />
          your learning pace
        </h3>
      </div>
    </motion.div>
  )
}

export default Hero;
