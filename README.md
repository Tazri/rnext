# Module 4 : 4.16 - The lifecycle of an Effect

**Every React component goes through the same lifecycle:**

- A component mounts when it’s added to the screen.
- A component updates when it receives new props or state, usually in response to an interaction.
- A component unmounts when it’s removed from the screen.

> 🔴 It’s a good way to think about components, but not about Effects.

> 📕 Some Effects don’t return a cleanup function at all. More often than not, you’ll want to return one—but if you don’t, React will behave as if you returned an empty cleanup function.
