# Module 02 : 2.9 : Updating Array in a State

> 📗 In JavaScript, arrays are just another kind of object. Like with objects, **you should treat arrays in React state as read-only.**

## 🚚 Updating Arrays Without Mutation

| **Operation** | **Avoid (mutates the array)**       | **Prefer (returns a new array)**   |
| ------------- | ----------------------------------- | ---------------------------------- |
| adding        | `push`, `unshift`                   | `concat`, `[...arr]` spread syntax |
| removing      | `pop`, `shift`, `splice`            | `filter`, `slice`                  |
| replacing     | `splice`, `arr[i] = ...` assignment | `map`                              |
| sorting       | `reverse`, `sort`                   | copty the array first              |

## ⌨️ Keyboard Shortcuts

| Keys                                    | Description                     |
| --------------------------------------- | ------------------------------- |
| `ctrl` + `alt` + `shift` + `down arrow` | Copy the line to next line.     |
| `ctrl` + `alt` + `shift` + `up arrow`   | Copy the line to previous line. |
