import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import DropDown from "./dropdown";

function Features() {
  const [dropDown, setDropDown] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // @ts-ignore
      if (dropDownRef.current && !dropDownRef.current.contains(e.target))
        setDropDown(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div className="relative" ref={dropDownRef}>
      <button
        className="flexi-center gap-2 hover:bg-stone-800 hover:text-primary px-3 py-1.5 rounded transition-all cursor-pointer outline-none"
        onClick={() => setDropDown(!dropDown)}
      >
        Features
        <span>
          <FaAngleDown />
        </span>
      </button>
      {dropDown && <DropDown />}
    </div>
  )
}

export default Features;
