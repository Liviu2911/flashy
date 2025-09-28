import UserMenuAnimation from "./animation";
import { useNavigate } from "@tanstack/react-router";

export default function Logout() {
  const navigate = useNavigate();

  const signOut = () => {
    document.cookie = "token=;path=/;max-age=0";
    document.cookie = "username=;path=/;max-age=0";
    navigate({ to: "/login" });
  };
  return (
    <UserMenuAnimation>
      <button
        id="usermenu"
        className="cursor-pointer opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary"
        onClick={signOut}
      >
        Log out
      </button>
    </UserMenuAnimation>
  );
}
