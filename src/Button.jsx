/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

function Button({ children, handleClick }) {
  console.log("> Button : " + children + " Rendered.");
  return (
    <button onClick={handleClick} className="button button-success">
      {children}
    </button>
  );
}

export default memo(Button);
