# Module 3 : 3.7 : Choosing the State Structure - Avoid Duplication in State

## 🔍 Avoid Duplication in State

**Example of duplication state :**

```jsx
const [items, setItems] = useState(initialItems);
const [selectedItem, setSelectedItem] = useState(initialItems[0]);

// don't do that, cause selectedItem is on of
// the item of items.

// do this :
const [items, setItems] = useState(initialItems);
const [selectedId, setSelectedId] = useState(0);
```
