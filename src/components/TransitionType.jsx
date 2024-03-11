import { motion } from "framer-motion";

export default function TransitionType() {
  return (
    <div className="flex flex-col gap-y-10 items-start">
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-3xl mb-4">Without Animation Type</h1>

        <p className="text-lg text-gray-700">
          Hell this animation. I hate this thing. Can I do something or.
        </p>
        <hr className="w-full h-1 bg-slate-700 mt-3" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <h1 className="text-3xl mb-4">
          Animation Type <span className="text-rose-900">Spring</span>
        </h1>

        <p className="text-lg text-gray-700">
          Hell this animation. I hate this thing. Can I do something or.
        </p>
        <hr className="w-full h-1 bg-slate-700 mt-3" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "spring", bounce: 0.8 }}
      >
        <h1 className="text-3xl mb-4">
          Animation Type{" "}
          <span className="text-rose-900">Spring With Bounch</span>
        </h1>

        <p className="text-lg text-gray-700">
          Hell this animation. I hate this thing. Can I do something or.
        </p>
        <hr className="w-full h-1 bg-slate-700 mt-3" />
      </motion.div>
    </div>
  );
}
