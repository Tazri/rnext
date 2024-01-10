# Module 01 : 1.6 : Basics of JSX: React's Markup - JavaScript in JSX With Curly Braces

## 🗒️ Table of Content

- [📝 Passing String with Quote](#📝-passing-string-with-quote)
- [✒️ Using Curly Braces](#✒️-using-curly-braces)
- [🖊️ Using Double Curlies](#🖊️-using-duoble-curlies)

## 📝 Passing String with Quote

> 📗 In JSX, pass the string to set attribute. In that case use double quote or single quote.

Here example :

```jsx
// here pass string in title attribute.
<h1 title="This is title">Hello, World!</h1>
```

## ✒️ Using Curly Braces

> 📗 If need to use dynamice value in attribute or inside the text then use curly braces.Inside the curly braces, can use any kind of JavaScript expression.

Here example :

```jsx
function Component() {
  const theme = "dark";
  const name = "Anonymous";

  return (
    <>
      <div className={theme}>
        <h1>Hello, {name}</h1>
      </div>
    </>
  );
}
```

> 🔴 Don't use curly braces for dynamically set HTML tag name otherwise it through error.

### Where to use curly braces

<details>
<summary>1. <b>As text</b> directly inside a JSX tag</summary>

**✔️ Correct :**

```jsx
<h1>Hello, {name}!</h1>
```

**❌ Wrong:**

```jsx
<{tag}>Hello, World!</{tag}>
```

</details>

<details>
<summary>2. <b>As attributes</b> immediatly following the = sign</summary>

**✔️ Correct :**

```jsx
<img src={avatar} alt="avatar" />
```

**❌ Wrong :**

```jsx
<img src="{avatar}" alt="avater" />

// this src not pass dinamically, it's value is '{avatar}'.
// which is not work properly
```

</details>

## 🖊️ Using Duoble Curlies

> 📗 Double curlies `{}` nothing more than a JavaScript object inside the JSX. In this way to can write css inline style.

**For example :**

```jsx
<ul
  style={{
    backgroundColor: "black",
    color: "pink",
  }}
>
  <li>Improve the videophone</li>
  <li>Prepare aeronautics lectures</li>
  <li>Work on the alcohol-fuelled engine</li>
</ul>
```

> 🔴 Here use `backgroundColor` property instead of `background-color`. Cause `background-color` is not valid object property name in JavaScript. Where come this type of css style property name then write it in camel case.
