# Module 02 : 2.1 : Respoinding to Events - Adding Event Handlers

## 🔫 Adding Event Handlers

**Step to adding event handler :**

1. Declare a function for event, for example `handleClick`.
2. Implement the logic inside the function.
3. Add event handle in JSX.

For example :

```jsx
export default function Button() {
  // declare the event function
  function handleClick() {
    // define the logic
    alert("Clicked");
  }

  // Add event handle in JSX
  return <button onClick={handleClick}>Click Me</button>;
}
```

**There are some convention to adding event handler is :**

- Are usually defined inside components.
- Have name that start with `handle`, followed by the name of the event.

By convention, It is common to name event handlers as handle followed by the event name. Often to see `onClick={handleClick}`, `onMouseEnter={handleMouseEnter}`, and so on.

**Example of inline event handler :**

```jsx
<button onClick={() => {
  alert('You clicked me!');
}}>
```

> 🔴 Functions passed to event handlers must be passed, not called. For example:

| 🟢 passing a function (correct) | 🔴 calling a function (incorrect) |
| ------------------------------- | --------------------------------- |
| `onClick={handleClick}`         | `onClick={handleClick()}`         |

## 📝 Reading Props in Event Handlers

Because event handlers are declared inside of a component, they have access to the component’s props. For example :

```jsx
function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
```

## 🚚 Passing Event Handlers as Props

**Example to passing event handler as props :**

```jsx
function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}
```

## ✒️ Naming Event Handler Props

```jsx
function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function App() {
  return <Button onSmash={() => alert("Playing!")}>Play Movie</Button>;
}
```

> 🔴 Naming event handler props don't use browser supported event handler like `onClick`, instead of it use `onSmash` a good choose.
