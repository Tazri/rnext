# Module 02 : 2.7 : Queueing a Series of State Updates

## 📊 Updating the Same State Multiple Times Before The Next Render

If need to used state to update the state then use updater function. `setState` also accept the updater function. Here is example :

```jsx
setState((currentState) => {
  // do somthing
  return updatedStateValue;
});
```

Here is how react process updater function :

- React queues this function to be processed after all the other code in the event handler has run.
- During the next render, React goes through the queue and gives you the final updated state.

## ❓ What Happens If You Update State After Replacing It ?

**Understanding this with example :**

```jsx
<button onClick={() => {
  setNumber(number + 5); // now number is 5
  setNumber(n => n + 1); // here n = 5;
  // cause previous line directly update the state
  // and updater function received updated state.
}}>
```

## ✒️ Naming Conventions

It’s common to name the updater function argument by the first letters of the corresponding state variable:

```jsx
setEnabled((e) => !e);
setLastName((ln) => ln.reverse());
setFriendCount((fc) => fc * 2);
```

## ⚙️ Implementing State Queue

```jsx
export function getFinalState(baseState, queue) {
  // TODO: do something with the queue...
  return queue.reduce((previousstate, currentState) => {
    if (typeof currentState === "function") {
      return currentState(previousstate);
    } else {
      return currentState;
    }
  }, baseState);
}
```
