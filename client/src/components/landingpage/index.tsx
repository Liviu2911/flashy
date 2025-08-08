import { useContext } from "react";
import Hero from "./hero"
import Insights from "./insights"
import { AnimatePresence, motion } from "motion/react";
import ToggleSmallMenuContext from "../../contexts/togglesmallmenu/context";
import "../../style/landing.css";
import Pricing from "./pricing";
import Features from "./features";

function LandingPage() {
  const { active } = useContext(ToggleSmallMenuContext);

  return (
    <AnimatePresence>
      {!active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-20"
        >
          <Hero />
          <Insights />
          <Pricing />
          <Features />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LandingPage;
