import { Link, useNavigate } from "@tanstack/react-router";
import Navlink from "../navlink";
import useUser from "../../../hooks/useuser";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function Menu() {
  const user = useUser();
  const [userMenu, setUserMenu] = useState(false);

  const navigate = useNavigate();

  const signOut = () => {
    document.cookie = "token=;path=/;max-age=0";
    document.cookie = "username=;path=/;max-age=0";
    navigate({ to: "/login" });
  };

  return (
    <div className="sm:flex hidden items-center gap-2">
      <Navlink position={1600}>Pricing</Navlink>
      <Navlink position={2400}>Features</Navlink>
      {!user ? (
        <>
          <Link
            to="/login"
            className="opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="transition-all text-stone-200 cursor-pointer bg-primary/80 px-3 ml-2 py-1.5 rounded hover:bg-primary/90"
          >
            Create Account
          </Link>
        </>
      ) : (
        <>
          <button
            onClick={() => setUserMenu((prev) => !prev)}
            className="cursor-pointer flex flex-row items-center gap-2 opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary"
          >
            {user.username}
            <IoIosArrowDown />
          </button>
          {user && userMenu && (
            <div className="absolute right-30 z-30 top-16 bg-stone-900 p-2 rounded flex flex-col">
              <Link
                to="/"
                className="py-2 px-4 rounded hover:bg-black transition-all"
              >
                Settings
              </Link>
              <button
                id="usermenu"
                className="py-2 px-4 rounded hover:bg-black cursor-pointer transition-all"
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Menu;
