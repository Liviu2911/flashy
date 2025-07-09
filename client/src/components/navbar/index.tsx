import Menu from "./menu"
import { Link } from "@tanstack/react-router"

function Navbar() {
  return (
    <nav className="z-20 flex items-center justify-between px-12 border-b border-stone-700 w-full h-20">
      <Link to="/" className="font-bold text-xl tracking-wide">Flashy</Link>
      <Menu />
    </nav>
  )
}

export default Navbar;
