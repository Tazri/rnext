import { forwardRef, useImperativeHandle, useRef } from "react";

// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    // replace the ref value with this
    return {
      focus() {
        inputRef.current.focus();
      },
    };
  });
  return <input {...props} ref={inputRef} />;
});
export default MyInput;
