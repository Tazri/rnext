# Module 3 : 3.4 : Choosing the State Structure - Group Related State

## ✒️ Principles for structuring state

- **Group related state.** If you always update two or more state variables at the same time, consider merging them into a single state variable.
- **Avoid contradictions in state.** When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
- **Avoid redundant state.** If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.
- **Avoid duplication in state.** When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
- **Avoid deeply nested state.** Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.

## 🧱 Group Related State

**\*Example :**

```jsx
const [x, setX] = useState(0);
const [y, setY] = useState(0);

// change x,y at the same time then make them group state
const [position, setPosition] = useState({ x: 0, y: 0 });
```

> 📗 if some two state variables always change together, it might be a good idea to unify them into a single state variable.

## 💥 Avoid Contradictions in State

## 📚 Avoid Redundant State

> 📗 If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [fullName, setFullName] = useState(""); // this is redundant
```

> 📗 **”Mirroring”** props into state only makes sense when you want to ignore all updates for a specific prop. By convention, start the prop name with `initial` or `default` to clarify that its new values are ignored:

## 🔍 Avoid Duplication in State
