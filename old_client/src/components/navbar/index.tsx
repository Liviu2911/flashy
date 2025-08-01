import Logo from "./logo";
import Menu from "./menu"
// import { Link } from "@tanstack/react-router"
import { motion } from "motion/react";
import SmallMenu from "./smallmenu";
import { useState } from "react";
import ToggleSmallMenuProvider from "../../contexts/togglesmallmenu/provider";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.75 }}
      className="z-30 flex items-center justify-between px-12 border-b border-stone-700 w-full sm:h-20 h-16"
    >
      <ToggleSmallMenuProvider value={{ active, setActive }}>
        <Logo />
        <Menu />
        <SmallMenu />
      </ToggleSmallMenuProvider>
    </motion.nav>
  )
}

export default Navbar;
