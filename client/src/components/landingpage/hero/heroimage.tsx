import image from "../../../assets/heroimage.jpg";
import { motion } from "motion/react";

function HeroImage() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
    className="z-30 border-2 mt-12 hero-shadow p-1 bg-black border-stone-600 rounded-xl"
    >
      <img src={image} width={1200} />
    </motion.div>
  )
}

export default HeroImage;
