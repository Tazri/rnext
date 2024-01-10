# Module 01 : 1.6 : Understanding Props - Passing Props to a Component

## 🗒️ Table of Content

- [✒️ Conditionally Rendering JSX](#✒️-conditionally-rendering-jsx)
- [❓ Conditional (ternary) Operator (`? :`)](#❓-conditional-ternary-operator)
- [🖊️ Logical `&&` and `||` Operator](#🖊️-logical--and--operator)
- [❌ Nulish Coalisicing Operator](#❌-nullish-coalesicing-operator)

## ✒️ Conditionally Rendering JSX

Sometime need to render JSX or other thing based on condition. Below a example to render conditionally :

```jsx
export default function Greeting({ isLoggedIn, name }) {
  if (isLoggedIn) {
    return <h1>Welcome {name}</h1>;
  } else {
    return <h1>Welcome {guest}</h1>;
  }
}
```

> 📗 If need to print nothing then return `null`.

```jsx
export default function Greeting({ isLoggedIn, name }) {
  if (isLoggedIn) {
    return <h1>Welcome {name}</h1>;
  } else {
    return null; // nothing to print
  }
}
```

## ❓ Conditional (ternary) Operator (`? :`)

**Below code use ternary operator to render based on condition :**

```jsx
export default function Greeting({ isLoggedIn, name }) {
  return <h1>Welcome {isLoggedIn ? { name } : "Guest"}</h1>;
}
```

## 🖊️ Logical `&&` and `||` Operator

Using `&&` operator to render more shortcutly. Here example :

```jsx
export default function Status({ isOnline, name }) {
  return (
    <div>
      <h2>{name} {isOnline &&  {"Online"}}</h2>
    </div>
    );
}
```

> 🔴 Don’t put numbers on the left side of &&. Otherwise it render the number.

**Same way to used `||` operator. For Example :**

```jsx
export default function Status({isOnline, name}){
  return (
    <div>
      <h2>{name} {isOnline || {"Offline"}}</h2>
    </div>
  );
}
```

## ❌ Nullish Coalesicing Operator `??`

> 📘 `??` This operator called nullish coalisicing operator.

```jsx
value ?? expression;
// if value is nullish then it's return expression otherwise value
// nullish value is null and undefined
```
