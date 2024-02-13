import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
  useState,
} from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [increament, setIncreament] = useState(1);

  const onTick = useEffectEvent(() => {
    setCount((c) => c + increament);
  });

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCount((c) => c + increament);
  //   }, 1000);

  //   console.log("> Increament");

  //   return () => clearInterval(timerId);
  // }, [increament]);

  useEffect(() => {
    const timerId = setInterval(onTick, 1000);

    console.log("runnen");
    return () => clearInterval(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-1/2 mx-auto p-3 text-left flex flex-col gap-y-1">
        <div className="flex gap-x-6 items-center">
          <p className="text-xl">Counter : {count}</p>
          <button onClick={() => setCount(0)} className="button button-failed">
            Reset
          </button>
          <button
            className="button button-success"
            onClick={() => console.clear()}
          >
            Clear Console
          </button>
        </div>

        <hr className="my-3" />
        <div className="flex flex-row flex-wrap gap-x-4 items-center">
          <button
            disabled={increament == 0}
            onClick={() => setIncreament((i) => i - 1)}
            className="button-circle_mini button-failed text-lg"
          >
            -
          </button>
          <span className="text-lg">{increament}</span>
          <button
            onClick={() => setIncreament((i) => i + 1)}
            className="button-circle_mini button-success text-lg"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
