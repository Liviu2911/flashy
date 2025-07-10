import Menu from "./menu"
import { Link } from "@tanstack/react-router"
import { motion } from "motion/react";

function Navbar() {
  const duration = 0.75;
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay: 0.75 }}
      className="z-20 flex items-center justify-between px-12 border-b border-stone-700 w-full h-20"
    >
      <Link to="/" className="font-bold text-xl tracking-wide">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration, delay: 0.5 }}
        >
          Flashy
        </motion.h1>
      </Link>
      <Menu />
    </motion.nav>
  )
}

export default Navbar;
