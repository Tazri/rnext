import { motion } from "framer-motion";

const shapeVariants = {
  initial: {
    opacity: 1,
    y: "100vh",
  },
  animate: {
    opcity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const childVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 2,
    transition: {
      duration: 2,
    },
  },
};

export default function Variants() {
  return (
    <motion.div
      variants={shapeVariants}
      initial="initial"
      animate="animate"
      className="bg-green-700 w-32 h-32 rounded border m-4"
    >
      <motion.div
        variants={childVariants}
        className="bg-red-500 w-12 h-12 rounded-full border"
      ></motion.div>
    </motion.div>
  );
}
