import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import DropDown from "./dropdown";
import { AnimatePresence } from "motion/react";

function Features() {
  const [dropDown, setDropDown] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // @ts-ignore
      if (dropDownRef.current && !dropDownRef.current.contains(e.target))
        setTimeout(() => {
          setDropDown(false)
        }, 250)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div className="z-30 relative flex flex-col items-center" ref={dropDownRef}>
      <button
        className={`${dropDown && "bg-stone-800 text-primary"} opacity-80 hover:opacity-100 flexi-center gap-2 hover:bg-stone-800 hover:text-primary px-3 py-1.5 rounded transition-all cursor-pointer outline-none`}
        onClick={() => setDropDown(!dropDown)}
      >
        Features
        <span>
          <FaAngleDown />
        </span>
      </button>
      <AnimatePresence>
        {dropDown && <DropDown />}
      </AnimatePresence>
    </div>
  )
}

export default Features;
