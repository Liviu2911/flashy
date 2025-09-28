import UserMenuAnimation from "./animation";
import { Link } from "@tanstack/react-router";

export default function Settings() {
  return (
    <UserMenuAnimation>
      <Link
        to="/"
        className="cursor-pointer opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary"
      >
        Settings
      </Link>
    </UserMenuAnimation>
  );
}
