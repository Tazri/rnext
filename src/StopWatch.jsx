import { useRef, useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondPassed = 0;

  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <div className="mt-10 bg-slate-200 text-slate-900 p-4 w-1/2 ">
        <h1 className="text-3xl mb-2">
          Time Passed : {secondPassed.toFixed(3)}
        </h1>
        <div className="flex gap-x-4 justify-center">
          <button
            className="text-lg text-slate-200 bg-green-600 py-2 px-4 rounded-lg"
            onClick={handleStart}
          >
            Start
          </button>

          <button
            className="text-lg text-slate-200 bg-blue-600 py-2 px-4 rounded-lg"
            onClick={handleStop}
          >
            Stop
          </button>
        </div>
      </div>
    </>
  );
}
