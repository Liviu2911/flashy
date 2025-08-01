import { motion } from "motion/react"

function Bgstars() {
  const stars = [
    { x: 200, y: 203 },
    { x: 1630, y: 333 },
    { x: 750, y: 103 },
    { x: 903, y: 433 },
    { x: 800, y: 803 },
    { x: 700, y: 503 },
    { x: 100, y: 703 },
    { x: 430, y: 203 },
    { x: 340, y: 933 },
    { x: 510, y: 103 },
    { x: 1600, y: 803 },
    { x: 80, y: 343 },
    { x: 1250, y: 43 },
    { x: 1300, y: 143 },
    { x: 400, y: 543 },
    { x: 1240, y: 503 },
  ];
  return (
    <div className="w-full overflow-hidden absolute">
      <div className="absolute">
        {stars.map((star, index) => (
          <motion.div
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
            initial={star}
            animate={{ x: star.x + index * -2, y: star.y + index * 5 }}
            exit={star}
            key={index + "star"}
            className="opacity-30 w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>
    </div>
  )
}

export default Bgstars;
