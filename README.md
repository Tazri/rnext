# Module 3 : 3.14 : Comparing `useState` and `useReducer` - How to write reducers well

## ✒️ useImmerReducer

```jsx
import { useImmerReducer } from "use-immer";

// inside the function :
const [state, dispatch] = useImmerReducer(functionReducer,initialValue);

// updating state
dispatch(actionObject)

// functionReducer prototype
function functionReducer(draftState,actionObject){
    // update the defatState or
    // return the updated state
    return updatedState.
}
```
