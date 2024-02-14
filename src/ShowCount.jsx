/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

function ShowCount({ children, countNo }) {
  console.log("> contNo : " + countNo + " rendered.");
  return <h2 className="text-3xl my-2">{children}</h2>;
}

export default memo(ShowCount);
