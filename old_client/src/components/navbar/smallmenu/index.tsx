import { IoMenuSharp } from "react-icons/io5";
import { useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import ToggleSmallMenuContext from "../../../contexts/togglesmallmenu/context";
import Dropdown from "./dropdown";

function SmallMenu() {
  const { active, setActive } = useContext(ToggleSmallMenuContext)
  return (
    <div className="z-30 sm:hidden w-full flex flex-row justify-end">
      <button onClick={() => setActive(prev => !prev)} className={`z-20 transition-all text-xl ${active ? "text-black" : "text-stone-200"}`}>
        <IoMenuSharp />
      </button>
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 150 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1, ease: "linear" }}
              className="w-4 h-4 rounded-full bg-stone-200 opacity-0 z-10 absolute right-0 top-0"
            />
            <Dropdown />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SmallMenu;
