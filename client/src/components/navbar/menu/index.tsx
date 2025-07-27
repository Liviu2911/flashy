import Features from "./features";
import Navlink from "../navlink";

function Menu() {
  return (
    <div className="sm:flex hidden items-center gap-2">
      <Navlink>Pricing</Navlink>
      <Features />
      <Navlink>Log In</Navlink>
      <Navlink>Create Account</Navlink>
    </div>
  )
}

export default Menu;
