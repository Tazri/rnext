# Module 01 : 1.5 - Basics of React Components : Importing & Exporting Components

## 🚚 Exporting and Importing

Move a component in three steps is :

1. Make a new JS file to put the components in.
2. Export the component from the file. (using either default or named exports).
3. Import it in the file where need to use the component.

There are two type of exports. Here :

<details>
<summary>1. Default Export</summary>

> 📗 In that case just use `export default` keyword to export the component.

```jsx
export default function ComponentName() {
  return <h1>This is component</h1>;
}
```

> 🔴 Only one function can export by default.

Below example of import `default export` component :

```jsx
import ComponentName from "file/path/FileName.jsx";

// if using vite then it can be possible
// to import component without file extention

import ComponentName from "file/path/FileName";
```

</details>

<details>
<summary>2. Named Export</summary>

> 📗 In that case just use `export` keyword to export the component.

```jsx
export function ComponentName() {
  return <h1>This is component</h1>;
}
```

Below example of import `named export` component :

```jsx
import { ComponentName } from "file/path/FileName.jsx";

// if using vite then it can be possible
// to import component without file extention

import { ComponentName } from "file/path/FileName";
```

</details>
