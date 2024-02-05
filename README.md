# Module 4 : 4.2 - Manipulating the DOM with Refs - Getting a ref to the node

## 🗒️ Getting Ref to The Node

```jsx
// first declare the ref
const nodeRef = useRef(null);

// in rendering
// use `ref` attribute to store node into
// ref
// for example
<div ref={nodeRef}></div>;

// here nodeRef.current is div.
```

## 📢 Using a Ref Callback

```jsx
<div
  ref={(node) => {
    // here node is div
    // now we can do anything with
    // nodeRef current object object here.
  }}
></div>
```
