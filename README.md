# Module 3 : 3.6 : Choosing the State Structure - Avoid Redundant State

## 📚 Avoid Redundant State

> 📗 If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [fullName, setFullName] = useState(""); // this is redundant
```

> 📗 **”Mirroring”** props into state only makes sense when you want to ignore all updates for a specific prop. By convention, start the prop name with `initial` or `default` to clarify that its new values are ignored:

> 📗 **Derived or Calculate State** is a state which is depends on other state. For example, 'fullName' depends on 'firstName' and 'lastName'. Avoid this type of state.

> 🔴 Avoid to use props in state
