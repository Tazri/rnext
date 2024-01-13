# Module 02 : 2.2: Respoinding to Events - Adding Event Handlers

## 🛞 Propagation

> 📗 Event handlers will also catch events from any children component might have. That is called an event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then goes up the tree.

**Below the example :**

```jsx
<div
  className="Toolbar"
  onClick={() => {
    console.log("Click on div..");
  }}
>
  <button onClick={() => console.log("Click on button..")}>Play</button>
</div>
/**
 * If click on button then event gose up like :
 * button -> div
 *
 */
```

## 🚦 Stoping Propagation

Use `event.stopPropagation()` method to stop the propagation. Here example :

```jsx
<button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
```

## 🛑 Preventing Default Behavior

Some browser events have default behavior associated with them like `form` submit. In that case prevent those default behavior just use `event.prevent.Default()` method. For example :

```jsx
<form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
```

## 💊 Can event handlers have side effects?

> 📗 Absolutely! Event handlers are the best place for side effects. Unlike rendering functions, event handlers don’t need to be pure.
