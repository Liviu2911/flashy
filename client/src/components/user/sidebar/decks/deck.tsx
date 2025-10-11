import { useContext } from "react";
import type { Folder } from "../../../../contexts/folders/context";
import FoldersContext from "../../../../contexts/folders/context";

function Deck({ folder }: { folder: Folder }) {
  const { changeCurrentFolder, currentFolder } = useContext(FoldersContext);
  const change = (folder: Folder) => {
    if (changeCurrentFolder) changeCurrentFolder(folder);
  };
  
  const active = currentFolder?.id === folder.id

  return (
    <div
      onClick={() => change(folder)}
      className={`${active ? "bg-gray-700" : "hover:bg-gray-700"} flex items-center justify-between py-1 px-4 rounded transition-all`}
    >
      <h1 className="text-gray-300">{folder.name}</h1>
      <h2 className="text-sm text-primary opacity-75">
        {folder.flashcards.length} 
      </h2>
    </div>
  );
}

export default Deck;
