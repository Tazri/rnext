import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import ShowCount from "./ShowCount";
import Title from "./Title";

export default function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const plusOne = useCallback(() => {
    setCountOne((n) => n + 1);
  }, []);

  const plusFive = useCallback(() => {
    setCountTwo((n) => n + 5);
  }, []);

  const isEven = useMemo(() => {
    for (let i = 0; i < 200000000; i++);

    return countOne % 2 == 0;
  }, [countOne]);

  return (
    <>
      <div className="w-1/2 mx-auto p-3 text-left flex flex-col gap-y-1">
        <Title />
        <hr />

        <ShowCount countNo={1}>{countOne}</ShowCount>
        {isEven ? "Even" : "Odd"}
        <Button handleClick={plusOne}>Plus 1</Button>

        <hr className="mb-4" />
        <ShowCount countNo={2}>{countTwo}</ShowCount>
        <Button handleClick={plusFive}>Plus 5</Button>

        <hr className="mb-4" />
        <button
          onClick={() => console.clear()}
          className="button button-failed"
        >
          Clear Console
        </button>
      </div>
    </>
  );
}
