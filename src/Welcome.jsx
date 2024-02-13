import { useRef } from "react";
import useFadeIn from "./useFadeIn";

export default function Welcome() {
  const ref = useRef(null);

  useFadeIn(ref, 1000);
  return (
    <h2
      ref={ref}
      className="flex items-center justify-center w-full h-96 text-4xl bg opacity-0"
    >
      Hello, World!
    </h2>
  );
}
