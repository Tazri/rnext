import { useRef } from "react";

export default function Cats() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function pythonHandler() {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function luchiHandler() {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function pachHandler() {
    thirdCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <div className="w-1/2 bg-white mx-auto mt-10 p-2 overflow-hidden">
        <nav className="flex justify-center gap-x-2 mb-3">
          <button className="bg-green-700 py-2 px-4" onClick={pythonHandler}>
            Python
          </button>
          <button className="bg-blue-700 py-2 px-4" onClick={luchiHandler}>
            Luchi
          </button>
          <button className="bg-red-700 py-2 px-4" onClick={pachHandler}>
            Pach
          </button>
        </nav>

        <div className="w-full">
          <ul className="overflow-hidden w-full whitespace-nowrap">
            <li
              className="w-1/2 inline-block whitespace-nowrap"
              ref={firstCatRef}
            >
              <img
                className="border-2 border-slate-700 w-full"
                src="https://placekitten.com/g/200/200"
                alt="1"
              />
            </li>
            <li
              className="w-1/2 inline-block whitespace-nowrap"
              ref={secondCatRef}
            >
              <img
                className="border-2 border-slate-700 w-full"
                src="https://placekitten.com/g/250/200"
                alt="2"
              />
            </li>
            <li
              className="w-1/2 inline-block whitespace-nowrap"
              ref={thirdCatRef}
            >
              <img
                className="border-2 border-slate-700 w-full"
                src="https://placekitten.com/g/300/200"
                alt="3"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
