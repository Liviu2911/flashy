import { motion } from "motion/react";
import { useContext } from "react";
import ToggleSmallMenuContext from "../../contexts/togglesmallmenu/context";

function Logo() {
  const { active } = useContext(ToggleSmallMenuContext);
  return (
    <motion.h1
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className={`${active ? "text-primary" : "text-stone-200"} z-20 font-bold text-xl tracking-wide`}
    >
      Flashy
    </motion.h1>
  )
}

export default Logo;
