# Module 3 : 3.3: Thinking About UI declaratively in React - Finalize React States & Connect Event Handlers

To better understand how to think in React, you’ll walk through reimplementing this UI in React below:

- **Identify** your component’s different visual states
- **Determine** what triggers those state changes
- **Represent** the state in memory using useState
- **Remove** any non-essential state variables
- **Connect** the event handlers to set the state

## 🧠 Represent the state in memory with `useState`

> 📗 Next you’ll need to represent the visual states of your component in memory with useState. Simplicity is key: each piece of state is a “moving piece”, and you want as few “moving pieces” as possible. More complexity leads to more bugs!

## 🗑️ Remove any non-essential state variables

> 📗 You want to avoid duplication in the state content so you’re only tracking what is essential. Spending a little time on refactoring your state structure will make your components easier to understand, reduce duplication, and avoid unintended meanings.

Here are some questions you can ask about your state variables:

- **Does this state cause a paradox?** A paradox usually means that the state is not constrained enough. There are four possible combinations of two booleans, but only three correspond to valid states.
- **Is the same information available in another state variable already?**
- **Can you get the same information from the inverse of another state variable?**

## 🛜 Connect the event handlers to set state

> 📗 Lastly, create event handlers that update the state. Below is the final form, with all event handlers wired up:
