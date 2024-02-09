import { useEffect, useState } from "react";

export default function Playground() {
  const [text, setText] = useState("a");

  useEffect(() => {
    console.log(`🟢 Shedule "${text}" log`);
    const timeOutId = setTimeout(() => {
      console.log(`⏰ ${text}`);
    }, 3000);

    return () => {
      clearTimeout(timeOutId);
      console.log(`🛑 Cancel Shedule ${text} log`);
    };
  });

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="text-left flex flex-col p-2 gap-y-4">
      <input
        className="text-black p-2 text-lg"
        value={text}
        onChange={handleChange}
      />
      <p className="bg-rose-600 py-2 px-4">{text || "Empty"}</p>
    </div>
  );
}
