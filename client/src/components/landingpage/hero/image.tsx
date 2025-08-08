import image from "../../../assets/heroimage.jpg";
import { motion } from "motion/react";

function Image() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 22 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.25, duration: 0.75 }}
    className="relative w-full flex items-center justify-center">
      <div className="absolute top-20 w-[68%] sm:block hidden heroimage-shadow z-10" />
      <img alt="hero image" src={image} className="w-[85%] rounded-xl z-20 border border-stone-800" />
     <div className="w-[85%] sm:h-72 h-24 hero-gradient absolute bottom-0 z-30" /> 
    </motion.div>
  )
}

export default Image;
