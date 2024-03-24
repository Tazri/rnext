import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
  const mountPoint = document.getElementById("portal-root");
  const elementDiv = document.createElement("div");

  useEffect(() => {
    mountPoint.appendChild(elementDiv);

    return () => {
      mountPoint.removeChild(elementDiv);
    };
  });
  return createPortal(children, elementDiv);
}
