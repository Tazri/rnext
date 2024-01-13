# Module 02 : 2.3 : Understanding State : A Component's Memory

## ❓ When a Regular Variable isn’t Enough

- **Local variables don’t persist between renders.** When React renders a component in a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.

- **Changes to local variables won’t trigger renders.**

To update a component with new data, two things need to happen :

1. **Retain** the data between renders.
2. **Trigger** React to render the component with new data (re-rendering).

The `useState` Hook provides those two things:

- A state variable to retain the data between renders.
- A state setter function to update the variable and trigger React to render the component again.

## 🚚 Adding a State Variable

To add a state variable, import useState from React at the top of the file:

```jsx
import { useState } from "react";
```

then create state variable like this at top of function defination :

```jsx
const [stateName, setStateName] = useState(defaultValue);
```

If need the change sate value then use `setStateName` function otherwhish component could not be render.

> 📘 In React, useState, as well as any other function starting with “use”, is called a Hook.

## 🦴 Anatomy of `useState`

> 🗒️ The convention is to name this pair like const `[something, setSomething]`. You could name it anything you like, but conventions make things easier to understand across projects.

The only argument to useState is the initial value of your state variable. Every time your component renders, useState gives you an array containing two values:

- The state variable (something) with the value you stored.
- The state setter function (`setSomething`) which can update the state variable and trigger React to render the component again.

Here’s how that happens in action:

1. Your component renders the first time.
2. You update the state.
3. Your component’s second render.
4. And so on.

> 📗 You can have as many state variables of as many types as you like in one component.

## 🚗 State is Isolated and Private

> 📗 State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.

**For example :**

```jsx
import Gallery from "./Gallery.js";

export default function Page() {
  return (
    <div className="Page">
      <Gallery />
      <Gallery />
    </div>
  );
}
```

Here if change the state of first `<Galary />` it dose not effect the other one.
