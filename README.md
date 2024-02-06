# Module 4 : 4.4 - When React Attaches The Refs & Best Practice for DOM Manipulation with Refs

## ❓ When React Attaches The Refs

In React, every update is split in two phases:

- During render, React calls your components to figure out what should be on the screen.
- During commit, React applies changes to the DOM.

In general, you don’t want to access refs during rendering. React sets ref.current during the commit. Usually, you will access refs from event handlers.

## 💡 Best Practice for DOM Manipulation with Refs

Refs are an escape hatch. You should only use them when you have to “step outside React”. Common examples of this include managing focus, scroll position, or calling browser APIs that React does not expose.

If you stick to non-destructive actions like focusing and scrolling, you shouldn’t encounter any problems. However, if you try to modify the DOM manually, you can risk conflicting with the changes React is making.

To illustrate this problem, this example includes a welcome message and two buttons. The first button toggles its presence using conditional rendering and state, as you would usually do in React. The second button uses the remove() DOM API to forcefully remove it from the DOM outside of React’s control.
