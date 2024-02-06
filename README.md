# Module 4 : 4.6 - Flushing State Updates Synchronously With FlushSync

## 📸 `flushSync`

In React, state updates are queued. Usually, this is what you want. However, here it causes a problem because setTodos does not immediately update the DOM. So the time you scroll the list to its last element, the todo has not yet been added. This is why scrolling always “lags behind” by one item.

To fix this issue, you can force React to update (“flush”) the DOM synchronously. To do this, import `flushSync` from `react-dom` and wrap the state update into a flushSync call:

```jsx
flushSync(() => {
  // update state here
});
listRef.current.doAnythingWithDOM();
```
