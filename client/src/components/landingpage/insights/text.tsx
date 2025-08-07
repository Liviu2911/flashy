import Stat from "./stat";
import { FiUsers } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";

function Text() {
  return (
    <div className="flex flex-col sm:gap-8 gap-4">
      <div className="flex flex-col sm:gap-4 gap-2 items-center">
        <h1 className="sm:text-4xl text-xl text-stone-200 font-bold">Join Thousands Of Succesful Students</h1>
        <h3 className="sm:text-xl text-gray-400 font-medium w-[75%] text-center">See how Flashy is making a difference in learning outcomes worldwide.</h3>
      </div>

      <div className="flex w-full justify-around items-center">
        <Stat numbers="50K+" text="Active users" Icon={FiUsers} />
        <Stat numbers="2M+" text="Cards created" Icon={IoBookOutline} />
        <Stat numbers="95%" text="Pass rate" Icon={SlBadge} />
      </div>
    </div>
  )
}

export default Text;
