import features from "../../../assets/json/features.json" assert { type: "json" }
import Feature from "./feature";
import { BsBoxes } from "react-icons/bs";
import { RiAiGenerate } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { PiSpeedometerThin } from "react-icons/pi";
import { GiProgression, GiMoebiusStar } from "react-icons/gi";
import { FaNewspaper } from "react-icons/fa6";

function Features() {
  const icons = [BsBoxes, RiAiGenerate, LuNotebookPen, FaRegLightbulb, PiSpeedometerThin, GiProgression, GiMoebiusStar, FaNewspaper];
  return (
    <div className="grid grid-cols-4 gap-4 items-center">
      {features.map((f, i) => <Feature color={f.color} Icon={icons[i]} title={f.title} description={f.description} />)}
    </div>
  )
}

export default Features;
