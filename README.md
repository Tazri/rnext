# Module 3 : 3.14 : Comparing `useState` and `useReducer` - How to write reducers well

## 📊 Comparing `useState` and `useReducer`

Reducers are not without downsides! Here’s a few ways you can compare them:

<details>
<summary><h3>Code size</h3></summary>
Generally, with useState you have to write less code upfront. With useReducer, you have to write both a reducer function and dispatch actions. However, useReducer can help cut down on the code if many event handlers modify state in a similar way.
</details>

<details>
<summary><h3>Readability</h3></summary>
useState is very easy to read when the state updates are simple. When they get more complex, they can bloat your component’s code and make it difficult to scan. In this case, useReducer lets you cleanly separate the how of update logic from the what happened of event handlers.
</details>

<details>
<summary><h3>Debugging</h3></summary>
When you have a bug with useState, it can be difficult to tell where the state was set incorrectly, and why. With useReducer, you can add a console log into your reducer to see every state 
</details>

<details>
<summary><h3>Testing</h3></summary>
A reducer is a pure function that doesn’t depend on your component. This means that you can export and test it separately in isolation. While generally it’s best to test components in a more realistic environment, for complex state update logic it can be useful to assert that your reducer returns a particular state for a 
</details>

<details>
<summary><h3>Personal Prefernece</h3></summary>
Some people like reducers, others don’t. That’s okay. It’s a matter of preference. You can always convert between useState and useReducer back and forth: they are equivalent!
</details>

## ✒️ Writing Reducers Well

- Reducers must be pure.
- Each action describes a single user interaction, even if that leads to multiple changes in the data.
