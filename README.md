# Module 4 : 4.3 - Manipulating the DOM with Refs - Accessing Another Component's DOM Nodes

**Important Staff From React Document :**

> React does not let a component access the DOM nodes of other components. Not even for its own children! This is intentional. Refs are an escape hatch that should be used sparingly. Manually manipulating another component’s DOM nodes makes your code even more fragile.

If need to access another dom component node then use `forwardRef` hooks. This is Higher Order Component. Syntax is :

```jsx
const ForwarededComponent = forwardRef(Component);

function Component(props, ref) {
  // here ref is what pass from parent component.
  // props is what pass from parent component.
  // just use them safely.
}
```
