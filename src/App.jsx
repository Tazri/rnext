import { useRef, useState } from "react";
import CatFriends from "./CatFriends";
import Cats from "./Cats";

export default function App() {
  const inputRef = useRef(null);
  const [show, setShow] = useState(true);

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return (
    <>
      <div className="p-4 bg-green-400 text-slate-900 flex w-1/2 mx-auto my-4 text-center justify-center gap-x-3">
        <input
          ref={inputRef}
          placeholder="Please enter the text..."
          className="p-2 outline-3 focus:outline-slate-900 border-none ring-offset-0 transition-all  outline-none"
        />
        <button
          onClick={handleClick}
          className="py-2 px-4 bg-slate-900 text-white"
        >
          Focus the Input
        </button>
      </div>

      <Cats />

      <div className="flex flex-col items-center p-5">
        {show && <CatFriends />}
        <button
          className="py-2 px-4 bg-red-800"
          onClick={() => setShow((s) => !s)}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
}
