# Module 02 : 2.6 : State as Snapshot

## 📸 Rendering Takes a Snapshot in Time

> 📗 “Rendering” means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated using its state at the time of the render.

When React re-renders a component:

- React calls your function again.
- Your function returns a new JSX snapshot.
- React then updates the screen to match the snapshot your function returned.

**Setting state only changes it for the next render.**

Example :

```jsx
<button onClick={() => {
  setNumber(number + 1);
  setNumber(number + 1);
  setNumber(number + 1);
}}>+3</button>

// this code is equivalant of :
<button onClick={() => {
  setNumber(0 + 1);
  setNumber(0 + 1);
  setNumber(0 + 1);
}}>+3</button>
```
