import { useState } from "react";
import Welcome from "./Welcome";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-1/2 mx-auto p-3 text-left flex flex-col gap-y-1 items-start">
        <button
          className="button button-success"
          onClick={() => setShow((s) => !s)}
        >
          {show ? "Hide" : "Show"}
        </button>
        <hr className="text-white w-full my-3" />

        {show && <Welcome />}
      </div>
    </>
  );
}
