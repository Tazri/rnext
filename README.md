# Module 01 : Getting Started with React

## 🗒️ Table of Contains

- [📖 Concept](#📖-concept)
  - [State](#state)
  - [React](#react)
  - [How React Rendering](#how-react-rendering)
- [✒️ Code and Syntax](#✒️-code-and-syntax)
  - [React Element](#react-element)
  - [React Component](#react-component)
  - [Root](#root)
  - [JSX](#jsx)
- [⌨️ Shortcut Keys](#⌨️-shortcut-keys)

## 📖 Concept

#### State

> 📘 State is a one kind of variable which used to update User Interface or User Iteraction.

Application এ যে ডাটা পরিবর্তন হলে application এর User Interface বা User Interaction পরিবর্তন হয় তাকে state বলা হয়।

#### React

> 📘 React is a library for desigin and developing user interface. Facebook engineer Jordan Walke created the react js, he inspired from php framework which name is **xhp-js**.

React has 3 part which is :

<details>
<summary>1. React Library</summary>

It's use for create User Interface and User Interaction.

</details>

<details>
<summary>2. ReactDOM</summary>
ReactDOM is a package in React that provides DOM-specific methods to render DOM elements of the web page.
</details>

<details>
<summary>3. React Native</summary>
React Native used for utilizes APIs and native UI components to build mobile application.
</details>

#### How React Rendering

React use **virtual dom** for draft. When state update then react compare the virtual dom with updated dom and update where is changed.

## ✒️ Code and Syntax

### React Element

> 📘 React Element is object which is create using `React.createElment` method.

**Creating react element :**

```jsx
React.createElement("ElementName", nullOrData, innerContent);

// for example
React.createElement("p", null, "Hello, Wolrd!");

// another example
React.createElement(
  "p",
  null,
  React.createElement("span", null, "Hello, World!")
);
```

### React Component

> 📘 React is one kind of function which is return react element.

**React component example :**

```jsx
function ComponentName() {
  return ReactElement;
}
```

> 📘 Dump Component is component which has no functionality.

### Root

> 📘 React Root is a dom element where ReactDOM render the react element or component.

**Creating root where react element will render :**

```jsx
let root = ReactDOM.createRoot(DomElement);

// for example
let root = ReactDOM.createRoot(Document.getElementById("root"));
```

**Render root :**

```jsx
root.render(ReactElmentOrComponent);
```

### JSX

> 📘 JSX full form is **JavaScript XML** used for esaily create and used react element and component. It's look like html.

**JSX example :**

```jsx
// jsx
<p>Hello, World!</p>;

// what is it actually
React.createElement("p", null, "Hello, World!");
```

> 🔴 But browser don't understand the jsx. That's why react give us transpiler which convert the JSX to javascript. This transpiler name is babel.

## ⌨️ Shortcut Keys

| Key                    | Description                      |
| ---------------------- | -------------------------------- |
| `ctrl` + `shift` + `L` | Select all same word in vs code. |
