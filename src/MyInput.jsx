import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
export default MyInput;
