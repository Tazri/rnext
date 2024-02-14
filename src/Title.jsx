/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

function TitleWithOutMemo() {
  () => {
    console.log("> Title Rendered.");
    return (
      <h2 className="text-3xl text-center my-3">Performance Optimization</h2>
    );
  };
}

const Title = memo(TitleWithOutMemo);

export default Title;
