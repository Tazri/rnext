import { useDeferredValue, useMemo, useState } from "react";
import { animals } from "./fakeAnimals";

export default function ListAnimal() {
  const [name, setName] = useState("");
  const deferredName = useDeferredValue(name);
  const animalPark = useMemo(() => {
    return animals.filter((animal) =>
      animal.name.toLowerCase().includes(deferredName.toLowerCase())
    );
  }, [deferredName]);

  function handleChange({ target: { value } }) {
    setName(value);
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="border rounded border-slate-200 p-1 my-2 mx-2"
      />

      {animalPark.map((animal) => {
        return (
          <div key={animal.id} className="border bg-gray-100 p-2 m-2">
            {animal.name}
          </div>
        );
      })}
    </>
  );
}
