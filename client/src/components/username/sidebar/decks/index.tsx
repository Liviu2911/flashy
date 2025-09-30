import { FaFolder } from "react-icons/fa";
import Deck from "./deck";

export default function Decks() {
  const decks = [
    { name: "Folder1", flashcards: 2 },
    { name: "Folder2", flashcards: 4 },
  ];

  return (
    <div className="m-2 mb-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 p-2 text-gray-300">
        <span>
          <FaFolder />
        </span>
        <h1>Decks</h1>
      </div>

      <div className="flex flex-col gap-2">
        {decks.map((deck) => (
          <Deck deck={deck} />
        ))}
      </div>
    </div>
  );
}
