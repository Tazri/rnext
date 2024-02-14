# Module 4 : 4.28 - Performance Optimization

## 🧠 React.memo

`React.memo` is higher order function which is take a component and return another component. Return component render first time, then it will render if only if **state** or **prop** change.

```jsx
React.memo(component);
```

## 📢 `useCallback`

`useCallback` take function and return a function which reference never change until dependencies change.

```jsx
const func = useCallback(function,[depenencies_array])
```

## 🧠 `useMemo`

`useMemo` take a function calculate the return value and store it and memorize with parameter for next time. If dependencies change then call the function again.

```jsx
const result = useMemo(func, [dependencies]);
```
