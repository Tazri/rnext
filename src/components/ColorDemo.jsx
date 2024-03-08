import { Circle } from "react-feather";

export default function ColorDemo() {
  const colorMap = ["#A63578", "teal", "#000000", "orange", "red", "green"];

  return (
    <>
      <h1 className="text-3xl py-3 text-center">Color Demo</h1>
      <div className="flex justify-center my-2">
        {colorMap.map((color) => {
          return <Circle color={color} fill={color} key={color} size={128} />;
        })}
      </div>
    </>
  );
}
