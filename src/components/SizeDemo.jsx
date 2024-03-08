import { Circle } from "react-feather";

export default function SizeDemo() {
  const sizeMap = ["16", "32", "48", "64", "96", "128", "144"];

  return (
    <>
      <h1 className="text-3xl py-3 text-center">Size Demo</h1>
      <div className="flex justify-center my-2">
        {sizeMap.map((size) => {
          return <Circle color="black" key={size} size={size} />;
        })}
      </div>
    </>
  );
}
