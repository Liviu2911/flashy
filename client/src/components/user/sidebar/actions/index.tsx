import { FaGear } from "react-icons/fa6";
import Button from "./button";
import { FaPlus } from "react-icons/fa";

function Actions() {
  return (
    <div className="flex flex-col gap-2 m-2">
      <Button Icon={FaPlus} text="Create folder" />
      <Button Icon={FaGear} text="Settings" />
    </div>
  );
}

export default Actions;
