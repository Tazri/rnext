import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Coutner() {
  const count = useMotionValue(0);

  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 20 });

    return animation.stop;
  }, [count]);
  return (
    <motion.div className="text-[200px] text-slate-800 flex flex-col justify-center items-center">
      {roundedValue}
    </motion.div>
  );
}
