# Module 4 : 4.8 - Synchronizing with Effects - How to Write an Effect

## 🖊️ How to Write Effect

Here how to write effect :

```jsx
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Code here will run after *every* render
  });
  return <div />;
}
```

## 📝 When Render useEffect

```jsx
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

## 🧹 Add Cleanup If Needed

```jsx
useEffect(() => {
  return () => {
    // this function
    // will call
    // after component unmount
  };
});
```
