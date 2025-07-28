import { Link } from "@tanstack/react-router";
import { FaArrowRightLong } from "react-icons/fa6";

function GetStarted() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link className="flexi-center gap-2 rounded-lg px-4 py-2 bg-stone-800 text-stone-400 hover:bg-stone-900 hover:text-stone-300 transition-all" to="/">
        Get started for free
        <span>
          <FaArrowRightLong />
        </span>
      </Link>

      <div className="flex flex-row items-center gap-1">
        <h1 className="text-stone-400 sm:text-sm text-xs">Free forever</h1>
        <div className="sm:w-1 sm:h-1 w-[3px] h-[3px] rounded-full bg-stone-400" />
        <h1 className="text-stone-400 sm:text-sm text-xs">No cred card required</h1>
      </div>
    </div>
  )
}

export default GetStarted;
