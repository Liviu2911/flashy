import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import useUser from "../../../hooks/useuser";

function UserMenu() {
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();
  const user = useUser();
  const signOut = () => {
    document.cookie = "token=;path=/;max-age=0";
    document.cookie = "username=;path=/;max-age=0";
    navigate({ to: "/login" });
  };

  return (
    <>
      <button
        onClick={() => setUserMenu((prev) => !prev)}
        className="cursor-pointer flex flex-row items-center gap-2 opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary"
      >
        {user?.username}
        <IoIosArrowDown />
      </button>
      {user && userMenu && (
        <div className="absolute right-31 z-30 top-16 bg-stone-900 p-2 rounded flex flex-col">
          <Link
            to="/"
            className="cursor-pointer opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary"
          >
            Settings
          </Link>
          <button
            id="usermenu"
            className="cursor-pointer opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  );
}
export default UserMenu;
