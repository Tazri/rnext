# Module 01 : 1.6 : Basics of JSX: React's Markup - Writing Markup with JSX

## Table of Content

- [📝 Writing Markup with JSX](#📝-writing-markup-with-jsx)
- [✒️ The Rules of JSX](#✒️-the-rules-of-jsx)

## 📝 Writing Markup with JSX

> 📗 JSX is a syntax extention for JavaScript that lets you write HTML - like markup inside a JavaScript file. JSX full form is **JavaScript XML**.

Some important point on JSX :

- JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.
- JSX and React are two separate things.
- JSX follow some extra rule to write which is completly different from HTML.
- Behind scene vite or any other react project, JSX convert to plain JavaScript object through Babel transpilar.

## ✒️ The Rules of JSX

<details>
<summary>1. Return a single root element</summary>

> 📙 To return multiple elements from a component, wrap them with a single parent tag.

For example :

```jsx
// wrong
return (
  <h1>Hello, World!</h1>
  <p>What's Up World?</p>
)

// correct
return (
  <div>
    <h1>Hello, World!</h1>
    <p>What's Up World?</p>
  </div>
)
```

> 📗 If not use extra div or any other HTML for return multiple component, then use react fragment. `<></>`

For Example :

```jsx
return (
  <>
    <h1>Hello, World!</h1>
    <p>What's Up World?</p>
  </>
);
```

> 📘 The empty tag is called **React Fragment**.

### ❓ Why do multiple JSX tags need to be wrapped ?

> Cause JSX convert to plain JavaScript object behind the scene and a JavaScript function can't return multiple object without wraping them in an array.

</details>

<details>
<summary>2. Close All Tag</summary>
JSX requires tag to be explicitly closed even self closing tag must be close.

For example :

```jsx
// wrong
<img src="profile.png" alt="profile" />

// correct
<img src="profile.png" alt="profile" />
```

</details>

<details>
<summary>3. camelCase <del>All</del> Most of the things!</summary>

> 📗 JSX turns into JavaScript that's why some attributes written in JSX can be become keys of JavaScript objects or JavaScript keyword.

For example `class` keyword. It's is a JavaScript keyword and also it's use in HTML tag to select them. That's why it's write `className`.

```jsx
// wrong in jsx
<h1 class="heading">Hello, World!</h1>

// correct in jsx
<h1 className="heading">Hello, World!</h1>
```

Every event handling attributes like `onclick`, must be write in camel case otherwise it's through error. For example :

```jsx
// wrong
<button onclick=functionName>Click</button>

// correct
<button onClick={functionName}>Click</button>
```

</details>

> 💡 Pro-tip : Use a JSX converter to convert HTML and SVG to JSX. [Click it to HTML to JSX converter site.](https://transform.tools/html-to-jsx)
