# Module 01 : 1.11 - Pure Components : Keeping Components Pure

> 📗 Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more.

## ✒️ Purity : Components as formulas

- It minds its own business. It does not change any objects or variables that existed before it was called.
- Same inputs, same output. Given the same inputs, a pure function should always return the same result.

> 📘 The **single responsibility principle (SRP)** is a computer programming principle that states that "A module should be responsible to one, and only one, actor."

## 🛠️ Side Effects: (Un)Intended Consequences

React's components rendering process must always be pure. Every components should only return their JSX, and not change any objects or variables that existed before rendering - that would make them impure!

> 📗 React offers a “Strict Mode” in which it calls each component’s function twice during development. By calling the component functions twice, Strict Mode helps find components that break these rules.

## ⏰ Local Mutation: Component’s Little Secret

The main point :

- It’s completely fine to change variables and objects that you’ve just created while rendering.

## ❓ Where Can Cause Side Effects

Main point are :

- In React, side effects usually belong inside event handlers.
- So event handlers don’t need to be pure.
- If event handler dose not work for specific side effect then use `useEffect`. However, this approach should be last resort.
