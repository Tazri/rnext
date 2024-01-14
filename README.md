# Module 02 : 2.5 : How Rendering Works

## ⚙️ How React Render

How react process of requesting and serving UI has three steps:

<details>
<summary><b>step 1 :</b> Triggering a render (delivering the guest’s order to the kitchen)</summary>

There are two reasons for a component to render:

1. It’s the component’s initial render.
2. The component’s (or one of its ancestors’) state has been updated.

</details>

<details>
<summary><b>step 2 :</b> Rendering the component (preparing the order in the kitchen)</summary>
 
- **On initial render**, React will call the root component.
- **For subsequent renders**, React will call the function component whose state update triggered the render.
</details>

<details>
<summary><b>step 3 :</b> Committing to the DOM (placing the order on the table)</summary>

- For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
- For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

</details>
