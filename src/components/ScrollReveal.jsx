import { motion } from "framer-motion";

function Box({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      className="w-48 h-48 border rounded-sm bg-rose-600 text-white flex justify-center items-center"
    >
      {text}
    </motion.div>
  );
}

export default function ScrollReveal() {
  const greetings = [
    "Hello, World!",
    "Hi Universe!",
    "What's Up? Universe!!",
    "Hey, Multiverse!!",
  ];

  return (
    <div>
      {greetings.map((greeting, index) => {
        return <Box text={greeting} key={index} />;
      })}
    </div>
  );
}
