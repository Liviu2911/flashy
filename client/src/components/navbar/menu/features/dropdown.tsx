import { TbCardsFilled } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { SlOrganization } from "react-icons/sl";
import { motion } from "motion/react";
import Feature from "./feature";

function DropDown() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
      className="-left-32 top-12 flex flex-col gap-2 p-2 text-stone-300 rounded-lg bg-stone-900 absolute max-w-fit"
    >
      <Feature delay={0.25} Icon={SlOrganization} text="Stay organized" />
      <Feature delay={0.50} Icon={TbCardsFilled} text="Learn using flashcards" />
      <Feature delay={0.75} Icon={PiStudent} text="Use AI to empower your learning" />
    </motion.div>
  )
}

export default DropDown;
