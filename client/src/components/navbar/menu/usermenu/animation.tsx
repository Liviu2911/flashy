import { motion } from "motion/react";
import type { Children } from "../../../../types/default";

export default function UserMenuAnimation({
  children,
}: {
  children: Children;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
