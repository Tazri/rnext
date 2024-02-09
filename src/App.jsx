import { useState } from "react";
import Playground from "./Playground";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-1/2 mx-auto p-3 text-center flex flex-col gap-y-4 ">
        <div className="gap-x-4 flex flex-row justify-center">
          <button
            onClick={() => setShow((s) => !s)}
            className="py-2 px-4 rounded-xl bg-emerald-600"
          >
            {show ? "🛩️ Unmount" : "🛩️ Mount"}
          </button>
          <button
            onClick={() => console.clear()}
            className="py-2 px-4 rounded-xl bg-rose-600"
          >
            🧹 Clear
          </button>
        </div>
        {show && <hr />}
        {show && <Playground />}
      </div>
    </>
  );
}
