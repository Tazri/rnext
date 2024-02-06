# Module 4 : 4.4 - Exposing a Subset of The API With an Imperative handle

## `useImperativeHandle`

> 📗 `useImperativeHandle` nstructs React to provide your own special object as the value of a ref to the parent component. So inputRef.current inside the Form component will only have the focus method. In this case, the ref “handle” is not the DOM node, but the custom object you create inside `useImperativeHandle` call.

```jsx
forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      // define the method
    }; // this object will replace with ref.current value
    // which is come from parent.
  });
});
```
