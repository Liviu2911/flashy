import { Link } from "@tanstack/react-router";

type Props = {
  to: string
  children: string
}

function Navlink({ to, children }: Props) {
  return (
    <Link
      className="opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary"
      to={to}
    >
      {children}
    </Link>
  )
}

export default Navlink;
