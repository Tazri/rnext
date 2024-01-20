import { useState } from "react";

export default function Counter({ isFancy = false }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className =
    "border-2 p-4 flex flex-col gap-4 justify-center items-center w-60";

  if (hover) {
    className += " bg-slate-700";
  }

  if (isFancy) {
    className += " border-4 border-teal-900 drop-shadow-xl";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1 className="text-3xl">{score}</h1>
      <button
        onClick={() => setScore((s) => s + 1)}
        className="bg-teal-700 py-2 px-4"
      >
        Add One
      </button>
    </div>
  );
}
