# Module 4 : 4.1 Referencing Values with Refs

## 📢 Declare Refs

```jsx
import { useRef } from "react";

function Component() {
  const ref = useRef(0);

  //....
}
```

`useRef` returns an object like this :

```jsx
{
  current: 0; // the value you passed to useRef
}
```

> 📗 The ref points to a number, but, like state, you could point to anything: a string, an object, or even a function. Unlike state, ref is a plain JavaScript object with the current property that you can read and modify.

> 🔴 Note that the component doesn’t re-render with every increment. Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!

## 📊 Differences Between Refs and State

| refs                                                              | state                                                                                                                     |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useRef(initialValue)` returns `{ current: initialValue }`        | `useState(initialValue)` returns the current value of a state variable and a state setter function ( `[value, setValue]`) |
| Doesn’t trigger re-render when you change it.                     | Triggers re-render when you change it.                                                                                    |
| Mutable                                                           | Immutable                                                                                                                 |
| You shouldn’t read (or write) the current value during rendering. | You can read state at any time. However, each render has its own snapshot of state which does not change.                 |

## ✒️ Implementing `useRef`

```jsx
// Inside of React
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
}
```

## ❓ When to use refs

- Storing timeout IDs
- Storing and manipulating DOM elements.
- Storing other objects that aren't necessary to calculate the JSX.

## 💡 Best Practices for Refs

- Treat refs as an escape hatch.
- Don't read or write ref.current during rendering.

## ☕ Recap

- Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.
- A ref is a plain JavaScript object with a single property called current, which you can read or set.
- You can ask React to give you a ref by calling the useRef Hook.
- Like state, refs let you retain information between re-renders of a component.
- Unlike state, setting the ref’s current value does not trigger a re-render.
- Don’t read or write ref.current during rendering. This makes your component hard to predict.
