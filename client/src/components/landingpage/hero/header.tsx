import { motion } from "motion/react"

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.75 }}
      className="flex flex-col gap-5 items-center w-[75%]">
      <h1 className="sm:text-8xl text-xl text-center font-bold z-20">Flashy is the new way of studying long term</h1>

      <p className="sm:text-lg text-sm text-stone-600 sm:w-[40%] w-[90%] z-10 text-center">
        Well integrated AI to help you achieve your goals, learn and grow through modern methods.
      </p>
    </motion.div>
  )
}

export default Header;
