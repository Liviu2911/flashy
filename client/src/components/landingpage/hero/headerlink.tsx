import { Link } from "@tanstack/react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";

function HeaderLink() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.75, delay: 0.5 }}
    >
      <Link
        className="border-animation text-sm max-w-max opacity-80 hover:opacity-100 hover:text-primary hover:bg-stone-800 transition-all text-stone-400 py-1 px-4 rounded-full border border-stone-700 flexi-center flex-row gap-3"
        to="/">
        <span>💫</span>
        <h1>Introducing AI studying</h1>
        <span>
          <FaArrowRightLong />
        </span>
      </Link>
    </motion.div>
  )
}

export default HeaderLink;
