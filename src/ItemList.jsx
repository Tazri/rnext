import { useState } from "react";

export default function ItemList({ items }) {
  const [selectedId, setSlectedId] = useState(null);

  const selectedItem = selectedId
    ? items.find((item) => selectedId === item.id)
    : null;

  const selectedBackground = {
    backgroundColor: "#0088ff",
  };
  return (
    <div className="text-left flex flex-col gap-y-3">
      <h2 className="text-3xl">Items : </h2>
      <ul className="px-3 bg-emerald-700 py-2 flex flex-col gap-y-2">
        {items.map((item) => {
          return (
            <li
              className="bg-rose-800 p-2 cursor-pointer hover:bg-rose-700 transition-all duration-300"
              key={item.id}
              style={selectedId == item.id ? selectedBackground : null}
              onClick={() => setSlectedId(item.id)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>

      {selectedItem && (
        <div className="bg-emerald-800 p-4">
          <h2 className="text-2xl">Selected Id : {selectedItem.id} </h2>
          <p className="text-lg">Serial No : {selectedItem.serialNo}</p>
          <p className="text-lg">Product Name : {selectedItem.name}</p>
        </div>
      )}
    </div>
  );
}
