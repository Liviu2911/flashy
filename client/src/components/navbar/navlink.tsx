import type { Children } from "../../types/default";

type Props = {
  children: Children
  position: number
}

function Navlink({ position, children }: Props) {
  const scroll = () => {
    window.scrollTo({
      top: position,
      behavior: "smooth"
    })
  }

  return (
    <button onClick={scroll} className="cursor-pointer opacity-80 hover:opacity-100 px-3 py-1.5 rounded transition-all hover:bg-stone-800 outline-none hover:text-primary">
      {children}
    </button>
  )
}

export default Navlink;
