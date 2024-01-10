# Module 01 : 1.4 - Basics of React Components : Your first component

## 🗒️ Table of Component

- [🧱 What is Component](#🧱-what-is-component)
- [🛠️ Step of Defining Component](#🛠️-step-of-defining-component)
- [⌨️ Shortcut Keys](#⌨️-shortcut-keys)
- [🔑 VS Code Command](#🔑-vs-code-command)

## 🧱 What is Component

> 📘 Components is a buidling block of react. It's a JavaScript function or class that can use as a HTML markup.

**The react component difference from HTML tag is :**

- It's JavaScript function or class.
- It's reuseable.
- It's can be functional component.

## 🛠️ Step of Defining Component

<details>
<summary>1. Export the Component</summary>

Must be export the component from file for reuse it from another file. For this thing, use `export default` keyword.

</details>

<details>
<summary>2. Define the function</summary>

Below define a function for component :

```jsx
export default Profile(){

}
```

> 🔴 React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

</details>

<details>
<summary>3. Add Markup</summary>

The function return **JSX** or return another component. For example :

```jsx
export default function Profile() {
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </div>
  );
}
```

> 🔴 Without parentheses, any code on the lines after return will be ignored!

</details>

## ⌨️ Shortcut Keys

| Keys                   | Description                             |
| ---------------------- | --------------------------------------- |
| `ctrl` + `shift` + `P` | Use for open command prompt in vs code. |

## 🔑 VS Code Command

| Command | Dsecription          |
| ------- | -------------------- |
| restart | Restart the VS Code. |
