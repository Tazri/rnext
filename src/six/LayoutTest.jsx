import { useLayoutEffect, useRef } from "react";

export default function LayoutTest() {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    element.style.backgroundColor = "white";

    setTimeout(() => {
      element.style.backgroundColor = "pink";
    }, 1000);

    return () => {
      element.style.backgroundColor = "white";
    };
  }, []);

  return (
    <div ref={elementRef} className="m-2 border p-2">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        ea, cumque, tempore qui eos id temporibus ipsam a corporis consequuntur
        expedita sint beatae minus vitae, optio distinctio quo saepe maiores
        eligendi. Quae nisi, alias dolorem vitae laborum sunt ab recusandae
        voluptatum sequi doloremque et commodi velit praesentium sed voluptatem
        temporibus!
      </p>
    </div>
  );
}
