## Modules : 6.4-9

### 6.4 : Storing everything as a state

> A value calculate from other states, that called derived state.

> If using derived state to can avoid to make another new state then do it.

### 6.5 : Multiple useState, useReducer instead

> If there is too many state then use `useReducer` instead.

### 6.6 : Using the index as a key in the loop

> Never use `index` as a component key.

### 6.7 : Conetxt over Redux (Putting everything in Redux)

useState > useReducer > Context > Redux

> Always project start with thinking like that, there is no need to use redux. After that, if there is no many contex in the project then use redux.

### 6.8 : Over Optimising Performance

> `useMemo` -> when calculate expensive computation.
> `useCallback` -> when memoize callback function.

### 6.9 : nothing else
