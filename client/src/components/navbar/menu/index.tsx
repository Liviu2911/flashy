import Features from "./features";
import Navlink from "../navlink";

function Menu() {
  return (
    <div className="flexi-center gap-2">
      <Navlink to="/pricing">Pricing</Navlink>
      <Features />
      <Navlink to="/login">Log In</Navlink>
      <Navlink to="/register">Create Account</Navlink>
    </div>
  )
}

export default Menu;
