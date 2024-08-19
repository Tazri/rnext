import getPosters from "@/libs/getPosters";
import Card from "./Card";
import Modal from "./Modal";

function Galary() {
  const cards = getPosters();
  return (
    <div className="container mx-auto border p-4 gap-5 flex flex-wrap justify-center">
      {cards?.map((card) => {
        return <Card card={card} key={card?.image} />;
      })}
    </div>
  );
}

export default Galary;
