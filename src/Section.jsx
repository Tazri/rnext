import { LevelContext } from "./LevelContext";

export default function Section({ children, level }) {
  return (
    <section className="m-4 border-2 p-4">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
