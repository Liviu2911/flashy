import { AiOutlineHome } from "react-icons/ai";

function HomeButton() {
  return (
    <div className="p-2 m-2 rounded text-gray-300 hover:bg-gray-600 transition-all flex items-center gap-2">
      <span>
        <AiOutlineHome />
      </span>
      <h1>Home</h1>
    </div>
  );
}

export default HomeButton;
