import image from "../../../assets/heroimage.jpg";
import { motion } from "motion/react";

function HeroImage() {
  return (
    <div className="relative z-30 mt-12 rounded-xl overflow-hidden p-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="border-2 hero-shadow p-1 bg-black border-stone-600 rounded-xl"
      >
        <img src={image} width={1200} className="" />
        <div className="w-full h-[600px] heroimage absolute bottom-0 left-0" />
      </motion.div>
    </div>
  )
}

export default HeroImage;
