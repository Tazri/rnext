import { motion } from "framer-motion";

export default function TextMotion() {
  const message = "My Life is Hell. This life is hell. Hell this life.";

  const wordArray = message.split(" ");
  return (
    <div className="text-4xl m-4 text-center">
      {wordArray.map((word, index) => {
        return (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.5,
            }}
            key={index}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </div>
  );
}
