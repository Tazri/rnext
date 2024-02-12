import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
  useState,
} from "react";

export default function App() {
  const [canMove, setCanMove] = useState(true);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const onMove = useEffectEvent((e) => {
    if (canMove) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  });

  useEffect(() => {
    console.count();
    window.addEventListener("pointermove", onMove);

    return () => {
      window.removeEventListener("pointermove", onMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-1/2 mx-auto p-3 text-left flex flex-col gap-y-1">
        <label className="text-xl cursor-pointer" htmlFor="canMove">
          <input
            type="checkbox"
            className="mr-2 cursor-pointer"
            id="canMove"
            checked={canMove}
            onChange={(e) => setCanMove(e.target.checked)}
          />
          Can Move ?
        </label>
        <hr />

        <button className="button mt-4" onClick={() => console.clear()}>
          Clear Console
        </button>

        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "crimson",
            position: "absolute",
            left: "-25px",
            top: "-25px",
            pointerEvents: "none",
            opacity: "0.5",
            transform: `translate(${position.x}px,${position.y}px)`,
          }}
        ></div>
      </div>
    </>
  );
}
