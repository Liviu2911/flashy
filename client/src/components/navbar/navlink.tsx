// import { Link } from "@tanstack/react-router";

import type { Children } from "../../types/default";

type Props = {
  // to: string
  children: Children
}

function Navlink({ children }: Props) {
  return (
    <div
      className="opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary"
    // to={to}
    >
      {children}
    </div>
  )
}

export default Navlink;
