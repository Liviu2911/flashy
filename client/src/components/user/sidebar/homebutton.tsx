import { Link } from "@tanstack/react-router";
import { AiOutlineHome } from "react-icons/ai";

function HomeButton() {
  return (
    <Link to="/" className="p-2 m-2 rounded text-gray-300 hover:bg-gray-600 transition-all flex items-center gap-2">
      <span className="text-primary">
        <AiOutlineHome />
      </span>
      <h1>Home</h1>
    </Link>
  );
}

export default HomeButton;
