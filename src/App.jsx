import { useState } from "react";
import Comments from "./Comments";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="w-1/2 mx-auto p-3 text-center flex flex-col gap-y-4 ">
        <h2 className="text-3xl">Comments</h2>
        {show && <Comments />}
        <button
          onClick={() => setShow((s) => !s)}
          className="py-2 px-4 bg-emerald-800 border-2 border-emerald-800 hover:bg-transparent transition-all"
        >
          {show ? "Hide" : "Show"} Comments
        </button>
      </div>
    </>
  );
}
