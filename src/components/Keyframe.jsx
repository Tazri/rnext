import { motion } from "framer-motion";

export default function Keyframe() {
  return (
    <motion.div
      animate={{
        borderTopRightRadius: [
          "30%",
          "30%",
          "40%",
          "30%",
          "40%",
          "30%",
          "30%",
          "40%",
          "30%",
          "40%",
        ],
        borderTopLeftRadius: [
          "40%",
          "55%",
          "20%",
          "70%",
          "40%",
          "40%",
          "55%",
          "20%",
          "70%",
          "40%",
        ],
        borderBottomRightRadius: [
          "30%",
          "40%",
          "30%",
          "40%",
          "70%",
          "30%",
          "40%",
          "30%",
          "40%",
          "70%",
        ],
        borderBottomLeftRadius: [
          "55%",
          "20%",
          "30%",
          "40%",
          "90%",
          "55%",
          "20%",
          "30%",
          "40%",
          "90%",
        ],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{ repeat: Infinity, repeatType: "mirror", duration: 3 }}
      className="bg-blue-500 border w-32 h-32 m-4"
    ></motion.div>
  );
}
