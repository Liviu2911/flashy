import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="mt-20 relative flex items-center">
      <span className="absolute left-4 text-sm text-primary opacity-75">
        <FaSearch />
      </span>
      <input
        placeholder="Search flashcards..."
        className="py-2 px-12 rounded border border-gray-700 placeholder:text-gray-500 placeholder:italic bg-bg focus:outline-2 focus:ring focus:ring-primary focus:outline-shadow focus:outline-offset-1 w-full"
      />
    </div>
  );
}

export default Search;
