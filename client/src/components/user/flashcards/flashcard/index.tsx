import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import CardWrapper from "./cardWrapper";

export type Flashcard = {
  folder: string;
  label: string;
  front: string;
  back: string;
};

function Flashcard({ flashcard }: { flashcard: Flashcard }) {
  const [visible, setVisible] = useState(false);
  const [front, setFront] = useState(true);

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleFlip = () => {
    setFront((prev) => !prev);
  };

  return (
    <div
      className="relative w-72 mt-12 perspective-[1000px]"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => handleFlip()}
    >
      {visible && (
        <div className="absolute right-2 top-2 flex flex-row gap-2 items-center z-20">
          <button
            onClick={handleEdit}
            className="cursor-pointer hover:text-primary bg-black rounded text-gray-200 p-2 transition-all"
          >
            <BiEdit />
          </button>
          <button
            onClick={handleDelete}
            className="cursor-pointer hover:text-red-500 bg-black rounded p-2 text-gray-200 transition-all"
          >
            <FaRegTrashCan />
          </button>
        </div>
      )}

      <div className={(!front && "flip-animation") + " duration-500 relative transform-3d"}>
        <CardWrapper className={"card-front"}>
          <h1 className="text-primary text-lg">{flashcard.folder}</h1>
          <h1 className="text-gray-500 text-sm">{flashcard.label}</h1>
          <h1>{flashcard.front}</h1>
        </CardWrapper>

        <CardWrapper className={"card-back"}>
          <h1 className="text-primary">Answer</h1>
          <h1>{flashcard.back}</h1>
        </CardWrapper>
      </div>
    </div>
  );
}

export default Flashcard;
