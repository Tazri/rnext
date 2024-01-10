# Module 01 : 1.8 : Understanding Props - Passing Props to a Component

## 🗒️ Table of Content

- [✉️ Props](#✉️-props)
- [📨 Passing Props to a Component](#📨-passing-props-to-a-component)
- [🟰 Specifying a Default Value for a prop](#🟰-specifying-a-default-value-for-a-prop)
- [📝 Forwarding Props With the JSX Spread Syntax](#📝-forwarding-props-with-the-jsx-spread-syntax)
- [🚚 Passing JSX as Children](#🚚-passing-jsx-as-children)
- [⏰ How Props Change Over Time](#⏰-how-props-change-over-time)
- [💡 Productivity Tips](#💡-productivity-tips)

## ✉️ Props

> 📗 React components use props to communicate each other. Every parent components can pass some informatin to it's child components by giving them props.

## 📨 Passing Props to a Component

<details>
<summary>Step 1 : Pass props to the child component</summary>
First pass the props to child component.

**For example :**

```jsx
// passing props in Profile component

<Profile name="anonymous" age="21" />
```

**Props name can be pass dynamically :**

```jsx
<Profile name={name} age={age} />
```

</details>

<details>
<summary>2. Read props inside the child component.</summary>

**Receive the props from child component :**

```jsx
export default function Profile(props) {
  let { name, age } = props;

  return (
    <h1>
      {name} ({age})
    </h1>
  );
}
```

**Another way to receive props using object destructuring :**

```jsx
export default function Profile({name,age}){
  return (<h1>{name} ({age}))</h1>
}
```

</details>

## 🟰 Specifying a default value for a prop

**Here is example to specifying default value for a prop :**

```jsx
function Profile({ name, gender = "male" }) {
  // ...
}
```

> 🔴 The default value is using only for the prop value missing or `undefined`.

## 📝 Forwarding Props With the JSX Spread Syntax

It possible to pass props using spread operator. For example :

```jsx
const person = { name: "a", age: "12" };

return <Profile name={person.name} age={person.age} />;
```

**It can be write this way :**

```jsx
const person = {name : "a",age:"12"};

return <Profile ...person />
```

## 🚚 Passing JSX as Children

**Here syntax to example of passing props as children :**

```jsx
<Profile>
  <h1>Anonymouse</h1>
</Profile>
```

**Receiving children from child :**

```jsx
export default function Profile(props) {
  const {
    children, // this is : <h1>Anonymous</h1>
  } = props;

  return <div>{children}</div>;
}
```

## ⏰ How Props Change Over Time

> 📗 Props are **immutable**. When needs to change its props then parent component pass the another props and old props will deleted from memory.

> 🔴 Don't try to change props.

## 💡 Productivity Tips

> 💡 If pres `ctrl` and click on any react component then the component file will be open.
