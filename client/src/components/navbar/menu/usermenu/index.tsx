import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import getCookies from "../../../../helpers/getCookies";
import { AnimatePresence, motion } from "motion/react";
import Settings from "./settings";
import Logout from "./logout";

function UserMenu() {
  const [userMenu, setUserMenu] = useState(false);
  const { username } = getCookies();

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setUserMenu((prev) => !prev)}
          className="cursor-pointer flex flex-row items-center gap-2 opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary"
        >
          {username}
          <IoIosArrowDown />
        </button>
        <AnimatePresence>
          {username && userMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="absolute z-30 top-10 w-full text-sm bg-stone-900 gap-2 px-2 py-4 rounded flex flex-col"
            >
              <Settings />
              <Logout />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Link
        to={"/" + username}
        className="transition-all text-stone-200 cursor-pointer bg-primary/80 px-3 ml-2 py-1.5 rounded hover:bg-primary/90"
      >
        Flashcards
      </Link>
    </>
  );
}

export default UserMenu;
