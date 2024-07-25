## Modules : 6.1 - Props Drilling and Props Plowing

> Props drilling is pass the props from parent to chald again and again. Try to avoid it.

> Props Plowing is pass too many props in the component.

**Example :**

```jsx
function Bio({ age, name, address, gender, id, rule }) {
  return <div>...</div>;
}
```

- **Props Drilling** is Verticale Problem.
- **Props Plowing** is Horizontal Problem.
