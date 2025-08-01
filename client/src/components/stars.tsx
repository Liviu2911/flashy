import { motion } from "motion/react";

type Star = {
  x: number,
  y: number,
  size: number,
  opacity: number,
  trajectory: {
    x: number,
    y: number
  }
}

function generateStars() {
  let res: Star[] = [];
  for (let i = 0; i < 50; i++) {
    const x = 10 + Math.floor(Math.random() * 1910);
    const y = 10 + Math.floor(Math.random() * 960);
    res.push({
      x,
      y,
      size: 2 + Math.floor(Math.random() * 6),
      opacity: (10 + Math.floor(Math.random() * 25)) / 100,
      trajectory: {
        x: Math.floor((Math.random() * 40) - 20),
        y: Math.floor((Math.random() * 40) - 20)
      }
    })
  }

  return res;
}

function Stars() {
  const stars: Star[] = generateStars();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 1, ease: "linear" }}
      className="z-10 sm:block hidden opacity-0 absolute w-full h-[90vh] left-0 top-20"
    >
      {stars.map(star => (
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ x: star.trajectory.x, y: star.trajectory.x }}
          exit={{ x: 0, y: 0 }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          key={star.x + star.y + star.opacity + star.size}
          style={{ scale: star.size, opacity: star.opacity, left: star.x, top: star.y }}
          className={`absolute bg-white h-[1px] w-[1px] rounded-full`}
        />
      ))}
    </motion.div>
  )
}

export default Stars;
