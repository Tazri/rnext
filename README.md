# Module 3 : 3.13 : Three Stepes to Consolidate State Logic With a Reducer

## ✒️ useReducer

```jsx
const [state, dispatch] = useReducer(functionReducer, initialValue);

// dispatch
dispatch(actionObject);
// dispatch function call the functionReduer
// with actionObject to update state.

// functionReducer
function functionReducer(currentState, action) {
  return updatedState; // update the state
}
```

**The useReducer Hook takes two arguments:**

- A reducer function
- An initial state

**And it returns:**

- A stateful value
- A dispatch function (to “dispatch” user actions to the reducer)

## 🗒️ Implementing useReducer

```jsx
import { useState } from "react";

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  // ???
  const dispatch = (action) => {
    setState((s) => reducer(s, action));
  };
  return [state, dispatch];
}
```
