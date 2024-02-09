# Module 4 : 4.14 - You Might Not Need an Effect - More Examples

## 🗃️ `useSyncExternalStore`

Prototype :

```jsx
useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
```

Example :

```jsx
import { useSyncExternalStore } from "react";
import { todosStore } from "./todoStore.js";

function TodosApp() {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );
  // ...
}
```

- **The subscribe function should subscribe to the store and return a function that unsubscribes.**
- **The getSnapshot function should read a snapshot of the data from the store.**

## 🗒️ Parameters

<details>
<summary>1. subscribe</summary>

A function that takes a single callback argument and subscribes it to the store. When the store changes, it should invoke the provided callback. This will cause the component to re-render. The subscribe function should return a function that cleans up the subscription.

</details>

<details>
<summary>2. getSnapshot</summary>
A function that returns a snapshot of the data in the store that’s needed by the component. While the store has not changed, repeated calls to getSnapshot must return the same value. If the store changes and the returned value is different (as compared by Object.is), React re-renders the component.
</details>

<details>
<summary>3. Optional <code>getServerSnapshot</code> </summary>
A function that returns the initial snapshot of the data in the store. It will be used only during server rendering and during hydration of server-rendered content on the client. The server snapshot must be the same between the client and the server, and is usually serialized and passed from the server to the client. If you omit this argument, rendering the component on the server will throw an error.
</details>

## 🚚 Returns

The current snapshot of the store which you can use in your rendering logic.
