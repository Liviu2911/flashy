import Features from "./features";
import Navlink from "../navlink";

function Menu() {
  return (
    <div className="sm:flex hidden items-center gap-2">
      <Navlink>Pricing</Navlink>
      <Features />
      <Navlink>Log In</Navlink>
      <span className="transition-all text-stone-200 cursor-pointer bg-primary/80 px-3 py-1.5 rounded hover:bg-primary/90">
        Create Account
      </span>
    </div>
  )
}

export default Menu;
