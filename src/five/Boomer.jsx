import { useInsertionEffect, useState } from "react";

export default function Boomer() {
  const [color, setColor] = useState("blue");

  const dynamicStyle = `
        .dynamic-style{
                color : ${color}
        }
    `;

  function changeColor() {
    setColor((c) => {
      if (c === "blue") {
        return "red";
      }
      return "blue";
    });
  }

  useInsertionEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = dynamicStyle;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  });
  return (
    <div className="m-2">
      <h1 className="dynamic-style">Text</h1>
      <button onClick={changeColor} className="bg-black text-white p-1 rounded">
        Change
      </button>
    </div>
  );
}
