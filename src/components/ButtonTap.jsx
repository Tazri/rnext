import { motion } from "framer-motion";

export default function ButtonTap() {
  return (
    <div className="flex gap-x-10">
      <motion.button
        className="bg-black text-white py-2 px-4 border-2 border-black"
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          color: "black",
          backgroundColor: "white",
          transition: {
            duration: 1,
          },
        }}
      >
        Tap Me
      </motion.button>

      <motion.button
        className="bg-black text-white py-2 px-4 border-2 border-black"
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          scale: 1.2,
          transition: { yoyo: Infinity },
        }}
      >
        Yu Yu
      </motion.button>
    </div>
  );
}
