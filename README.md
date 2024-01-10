# Module 01 : 1.10 : Rendering List

## 🗒️ Table of Content

- [📜 Rendering Lists](#📜-rendering-lists)
- [❓ Why Need Key ?](#❓-why-need-key)
- [💡 Where to Get `key`](#💡-where-to-get-key)
- [✒️ Rules of `key`](#✒️-rules-of-key)

## 📜 Rendering Lists

It's often need to render to multiple similar from a collection of data. Below a example :

Think that we have a data :

```jsx
const items = [
  {
    name: "Mouse",
    price: "$22",
    id: 0,
  },
  {
    name: "Keyboard",
    price: "$12",
    id: 1,
  },
  {
    name: "Monitor",
    price: "$50",
    id: 2,
  },
];
```

**Now render those items as list item ;**

```jsx
export default function List() {
  let itemsTag = items.map(({ name, price }) => {
    return (
      <li>
        {name}({price})
      </li>
    );
  });
  return (
    <>
      <ul>{itemsTag}</ul>
    </>
  );
}
```

> 🔴 Above code will give a warning is : `Warning: Each child in a list should have a unique “key” prop.`

> 📗 Every item in array must be have a unique key from other item in array.

**Here the correct code :**

```jsx
export default function List() {
  let itemsTag = items.map(({ name, price, id }) => {
    return (
      <li key={id}>
        {name}({price})
      </li>
    );
  });
  return (
    <>
      <ul>{itemsTag}</ul>
    </>
  );
}
```

> 📝 Note : JSX elements directly inside a map() call always need keys!

> 🔴 Don't use array index as a key cause array index is changeable.

## ❓ Why Need Key ?

React can identify the array item uniquely through key. React can't use array index for this thing cause array index is change anytime.

## 💡 Where to Get `key`

<details>
<summary>1. Data From a Database</summary>
If data is coming from a database, you can use the database keys/IDs, which are unique by nature.
</details>

<details>
<summary>2. Locally Generated Data</summary>

If data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) or a package like [uuid](https://www.npmjs.com/package/uuid) when creating items.

</details>

## ✒️ Rules of `key`

- Keys must be unique among siblings.
- Keys must not change or that defeats their purpose! Don’t generate them while rendering.
