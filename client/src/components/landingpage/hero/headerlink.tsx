import { Link } from "@tanstack/react-router";
import { FaArrowRightLong } from "react-icons/fa6";

function HeaderLink() {
  return (
    <Link
      className="border-animation text-sm max-w-max opacity-80 hover:opacity-100 hover:text-primary hover:bg-stone-800 transition-all text-stone-400 py-1 px-4 rounded-full border border-stone-700 flexi-center flex-row gap-3"
      to="/">
      <span>💫</span>
      <h1>Introducing AI studying</h1>
      <span>
        <FaArrowRightLong />
      </span>
    </Link>
  )
}

export default HeaderLink;
