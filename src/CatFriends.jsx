import { useRef } from "react";
import Button from "./Button";
import CatImage from "./CatImage";
import CatList from "./CatList";

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}

export default function CatFriends() {
  const itemRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);

    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemRef.current) {
      itemRef.current = new Map();
    }

    return itemRef.current;
  }
  return (
    <>
      <div className="w-1/2 bg-white mx-auto mt-10 p-2 overflow-hidden mb-10">
        <h2 className="text-3xl my-3 text-slate-900 text-center">
          Cat Friends
        </h2>
        <nav className="flex justify-center gap-x-2 mb-3">
          <Button onClick={() => scrollToId(0)} color={"blue"}>
            Python
          </Button>
          <Button onClick={() => scrollToId(5)} color={"green"}>
            Luchi
          </Button>
          <Button onClick={() => scrollToId(9)} color={"red"}>
            Pach
          </Button>
        </nav>

        <CatList>
          {catList.map((cat) => {
            return (
              <li
                key={cat.id}
                className="w-1/2 inline-block whitespace-nowrap"
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(cat.id, node);
                  } else {
                    map.delete(cat.id);
                  }
                }}
              >
                <CatImage src={cat.imageUrl} alt={"cat #" + cat.id} />
              </li>
            );
          })}
        </CatList>
      </div>
    </>
  );
}
