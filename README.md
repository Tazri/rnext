# Module 3 : 3.11 : Preserving and Resetting State - Changing Default Behavior

## 📌 Resetting State at The Same Position

**First Clearify Something :**

```jsx
// first case
<div>
    {
    condition ? <A /> : <A p="a" />
    {/* here render in one position in render tree */}
    }
</div>
// at the same position render either <A /> or <A p='a' />, it will
// preserve state cause it's same position.
```

```jsx
// second case
<div>
  {condition && <A />} {/* either it render null or <A /> in render tree */}
  {condition && <A p="a" />} {/* either it render null or <A p="a" /> in render tree */}
</div>
// <A/> and <A p="a" /> both are not the
// same position in render tree
```

**There is two ways to reset state when switching between them :**

<details>
<summary>2. Render components in different positions</summary>
For example :

```jsx
<div>
    { condition ? <A /> : <A p="a" /> }
</div>
// convert it to like below
<div>
  { condition && <A /> }
  { condition && <A p="a" /> }
</div>
```

</details>
<details>
<summary>1. Give each component an explicit identity with `key`</summary>

For exmaple :

```jsx
<div>{condition ? <A /> : <A p="a" />}</div>

// convert it to like below
<div>
    { condition ? <A key="1" /> : <A key="2" p="a" /> }
</div>
```

</details>
