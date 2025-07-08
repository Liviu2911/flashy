import Menu from "./menu"
function Navbar() {
  return (
    <nav className="z-20 flex items-center justify-between px-12 border-b border-stone-700 w-full h-20">
      <h1 className="font-bold text-xl tracking-wide">Flashy</h1>
      <Menu />
    </nav>
  )
}

export default Navbar;
