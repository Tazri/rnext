/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="text-center p-4 border-2 m-2">
        <h2 className="text-3xl mb-4">Almaty, Kazakhstan</h2>
        <div className="flex flex-col gap-4 text-left">
          <Panel
            title="About"
            isActive={activeIndex === 0}
            onClickHandler={() => setActiveIndex(0)}
          >
            With a population of about 2 million, Almaty is Kazakhstan's largest
            city. From 1929 to 1997, it was its capital city.
          </Panel>
          <Panel
            title="Etymology"
            isActive={activeIndex === 1}
            onClickHandler={() => setActiveIndex(1)}
          >
            The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word
            for "apple" and is often translated as "full of apples". In fact,
            the region surrounding Almaty is thought to be the ancestral home of
            the apple, and the wild <i lang="la">Malus sieversii</i> is
            considered a likely candidate for the ancestor of the modern
            domestic apple.
          </Panel>
        </div>
      </div>
    </>
  );
}
