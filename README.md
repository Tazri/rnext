# Module 3 : 3.10 : Preserving and Resetting State - Default Behavior

## 📌 State is Tied to a Position in The Render Tree

React builds render trees for the component structure in your UI.

When you give a component state, you might think the state “lives” inside the component. But the state is actually held inside React. React associates each piece of state it’s holding with the correct component by where that component sits in the render tree

## 📍 Same Component at The Same Position Preserves State

> 🔴 Remember that it’s the position in the UI tree—not in the JSX markup—that matters to React!

## 🧱 Different Components At the Same Position Reset State
