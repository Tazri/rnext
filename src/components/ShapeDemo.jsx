import { Box, Circle, Heart, Hexagon, Square, Triangle } from "react-feather";
export default function ShapeDemo() {
  return (
    <>
      <h1 className="text-3xl py-3 text-center">Shape Demo</h1>
      <div className="flex justify-center my-2">
        <Square color="black" size={128} />
        <Triangle color="black" size={128} />
        <Circle color="black" size={128} />
        <Box color="black" size={128} />
        <Heart color="black" size={128} />
        <Hexagon color="black" size={128} />
      </div>
    </>
  );
}
