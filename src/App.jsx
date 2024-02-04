import { useRef, useState } from "react";
import StopWatch from "./StopWatch";

export default function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  function handleCount() {
    setCount((c) => c + 1);
  }

  function handleRef() {
    ref.current = ref.current + 1;
    console.log(ref);
  }

  return (
    <>
      <div className="p-4 text-center flex-col flex items-center">
        <h3 className="text-2xl">Ref Value is in UI : {ref.current}</h3>
        <div className="flex gap-x-2 justify-center mt-4">
          <button
            className="bg-green-700 py-2 px-4 rounded-sm hover:bg-green-700/35"
            onClick={handleCount}
          >
            Update Count State {count}
          </button>
          <button
            className="bg-blue-700 py-2 px-4 rounded-sm hover:bg-blue-700/35"
            onClick={handleRef}
          >
            Update Ref Value
          </button>
        </div>

        <StopWatch />
      </div>
    </>
  );
}
