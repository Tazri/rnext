import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Stats from "./components/Stats";
import { decrement, increment } from "./features/counters/counterSlice";

export default function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce(
    (prevValue, { value }) => value + prevValue,
    0
  );

  function handleIncrement(id) {
    dispatch(increment(id));
  }

  function handleDecrement(id) {
    dispatch(decrement(id));
  }

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => {
          const { id, value } = counter;

          return (
            <Counter
              key={id}
              count={value}
              onIncrement={() => handleIncrement(id)}
              onDecrement={() => handleDecrement(id)}
            />
          );
        })}
        <Stats totalCount={totalCount} />
        <Posts />
      </div>
    </div>
  );
}

/**
<div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        <Counter />
      </div>
    </div>

*/
