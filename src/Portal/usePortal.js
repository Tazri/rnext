import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function usePortal(mountElement) {
  const mountPoint = document.getElementById(mountElement);
  const elementDiv = document.createElement("div");
  return function Portal({ children }) {
    useEffect(() => {
      mountPoint.appendChild(elementDiv);

      return () => {
        mountPoint.removeChild(elementDiv);
      };
    }, []);

    return createPortal(children, elementDiv);
  };
}
