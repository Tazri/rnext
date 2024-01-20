import { useState } from "react";
import Counter from "./Counter";

export default function App() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <>
      <div className="m-4 flex flex-col gap-3">
        <div className="flex gap-4">
          {isFancy ? (
            <div>
              <Counter isFancy={true} />
            </div>
          ) : (
            <section>
              {" "}
              <Counter />
            </section>
          )}
        </div>

        <div className="mt-2">
          <label htmlFor="show" className="text-2xl cursor-pointer select-none">
            <input
              checked={isFancy}
              onChange={(e) => setIsFancy(e.target.checked)}
              id="show"
              type="checkbox"
            />{" "}
            Show Fancy Border
          </label>
        </div>
      </div>
    </>
  );
}
