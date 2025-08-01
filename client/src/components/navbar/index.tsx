import Logo from "./logo";
import Menu from "./menu"
// import { Link } from "@tanstack/react-router"
import { motion } from "motion/react";
import SmallMenu from "./smallmenu";

function Navbar() {

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.75 }}
      className="z-30 flex items-center justify-between sm:px-32 px-12 w-full sm:h-20 h-16"
    >
      <Logo />
      <Menu />
      <SmallMenu />
    </motion.nav>
  )
}

export default Navbar;
