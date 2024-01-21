import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input
        placeholder="Add Task"
        className="p-2 text-slate-900"
        value={text}
        onChange={handleChangeText}
      />
      <button
        className="py-2 bg-amber-800"
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
