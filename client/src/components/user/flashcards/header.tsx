function Header() {
  return (
    <div className="flex flex-row justify-between items-center px-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Folder name</h1>
        {/* Number of cards */}
        <h1 className="text-gray-500">6 cards</h1>
      </div>

      <button className="rounded bg-primary px-4 py-3 hover:opacity-80 transition-all">Add Card</button>
    </div>
  );
}

export default Header;
