# Module 4 : 4.23 - Reusing Logic with Custom Hooks - Part 1

## ✒️ Hook names always start with `use `

React applications are built from components. Components are built from Hooks, whether built-in or custom. You’ll likely often use custom Hooks created by others, but occasionally you might write one yourself!

You must follow these naming conventions:

<details>
<summary><b>React component names must start with a capital letter</b></summary>
like StatusBar and SaveButton. React components also need to return something that React knows how to display, like a piece of JSX.
</details>

<<details>

<summary><b>Hook names must start with use followed by a capital letter</b></summary>
like useState (built-in) or useOnlineStatus (custom, like earlier on the page). Hooks may return arbitrary values.
</details>
