import { Link } from "@tanstack/react-router";
import type { IconType } from "react-icons";
import { motion } from "motion/react";

type Props = {
  Icon: IconType,
  text: string
  delay: number
}

function Feature({ Icon, text, delay }: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{ duration: 0.25, delay }}
    >
    <Link
    to="/"
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.x;
        const y = e.clientY - rect.y;
        document.documentElement.style.setProperty("--mouse-x", `${x}px`)
        document.documentElement.style.setProperty("--mouse-y", `${y}px`)
      }}
      className="glow cursor-pointer relative overflow-hidden border border-stone-700 opacity-80 flex items-center flex-row bg-stone-800 rounded gap-2 p-4"

    >
      <span className="text-primary">
        <Icon />
      </span>
      <h1 className="font-medium text-stone-400 w-68">{text}</h1>

    </Link>
    </motion.div>
  )
}

export default Feature;
