import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getData } from "./data/items.js";

export default function App() {
  const [items, setItems] = useState(null);
  const [selectedItem, setSelectedItem] = useState("item1");

  useEffect(() => {
    setItems(getData());
  }, []);

  return (
    <>
      <div className="w-1/2 mx-auto p-3 text-center flex flex-col gap-y-4 ">
        <div className="gap-x-4 flex flex-row justify-center">
          <button
            onClick={() => setSelectedItem("item1")}
            className="py-2 px-4 rounded-xl bg-emerald-600"
          >
            🖥️ Computer Items
          </button>
          <button
            onClick={() => setSelectedItem("item2")}
            className="py-2 px-4 rounded-xl bg-rose-600"
          >
            📚 Educational Items
          </button>
        </div>

        {items && <hr />}
        {items && <ItemList items={items[selectedItem]} />}
      </div>
    </>
  );
}
