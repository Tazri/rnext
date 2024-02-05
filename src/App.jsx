import { useRef } from "react";
import MyInput from "./MyInput";

export default function App() {
  const inputRef = useRef(null);

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return (
    <>
      <div className="p-4 bg-green-400 text-slate-900 flex w-1/2 mx-auto my-4 text-center justify-center gap-x-3">
        <MyInput
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
    </>
  );
}
