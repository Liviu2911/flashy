import { Link } from "@tanstack/react-router";
import Navlink from "../navlink";

function Menu() {
  return (
    <div className="sm:flex hidden items-center gap-2">
      <Navlink position={1600}>Pricing</Navlink>
      <Navlink position={2400}>Features</Navlink>
      <Link to="/login" className="opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary">Log In</Link>
      <Link to="/" className="transition-all text-stone-200 cursor-pointer bg-primary/80 px-3 ml-2 py-1.5 rounded hover:bg-primary/90">
        Create Account
      </Link>
    </div>
  )
}

export default Menu;
