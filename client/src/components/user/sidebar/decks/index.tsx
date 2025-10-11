import { FaFolder } from "react-icons/fa";
import Deck from "./deck";
import { useContext } from "react";
import FoldersContext from "../../../../contexts/folders/context";

export default function Decks() {
  const folders = useContext(FoldersContext)?.folders;

  return (
    <div className="m-2 mb-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 p-2 text-gray-300">
        <span className="text-primary">
          <FaFolder />
        </span>
        <h1>Decks</h1>
      </div>

      <div className="flex flex-col gap-2">
        {folders?.map((folder) => (
          <Deck folder={folder} key={folder.id} />
        ))}
      </div>
    </div>
  );
}
