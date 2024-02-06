import { forwardRef, useImperativeHandle, useRef } from "react";

function UlListWihoutForward({ children }, parentRef) {
  const ulRef = useRef(null);

  useImperativeHandle(parentRef, () => {
    return {
      showLastChild() {
        ulRef.current.lastChild.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      },
    };
  });

  return (
    <ul ref={ulRef} className="bg-teal-800 p-4 flex-grow w-1/2 overflow-auto">
      {children}
    </ul>
  );
}

const UlList = forwardRef(UlListWihoutForward);

export default UlList;
