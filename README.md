# Module 3 : 3.9 : Sharing State Between Components - Lifting State Up

## 🛩️ Lifting State Up

> 📗 If two or more components need to use a same state then lift the state to the common acesstor for they can share them by passing props. This process called **lifting state up**

## 🎮 Controlled and Uncontrolled Components

> 📘 It is common to call a component with some local state **“uncontrolled”**.

Uncontrolled components are easier to use within their parents because they require less configuration.

> 📘 If call a component with parent state or control from parent then it's called **controlled** component.

In practice, “controlled” and “uncontrolled” aren’t strict technical terms—each component usually has some mix of both local state and props. However, this is a useful way to talk about how components are designed and what capabilities they offer.

## A Single Source of Truth for Each State

For each unique piece of state, you will choose the component that “owns” it. This principle is also known as having a “single source of truth”. It doesn’t mean that all state lives in one place—but that for each piece of state, there is a specific component that holds that piece of information. Instead of duplicating shared state between components, lift it up to their common shared parent, and pass it down to the children that need it.

## 🍵 Recap

- When you want to coordinate two components, move their state to their common parent.
- Then pass the information down through props from their common parent.
- Finally, pass the event handlers down so that the children can change the parent’s state.
- It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).
