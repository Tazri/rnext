import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);

  const className = isFancy
    ? "m-4 border-2 p-4 border-dotted border-orange-700"
    : "m-4 border-2 p-4";
  return (
    <section className={className}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
