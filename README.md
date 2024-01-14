# Module 02 : 2.8 : Updating Object in State

## 🗒️ Treat State as Read-only

> 📗 React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.

> 🟢 treat any JavaScript object that you put into state as read-only.

Mutation is only a problem when change existing objects that are already in state. Mutating an object just created is okay because no other code references it yet. Changing it isn’t going to accidentally impact something that depends on it. This is called a “local mutation”. You can even do local mutation while rendering. Very convenient and completely okay!

## ⚙️ Using a Single Event Handler For Multiple Fields

<details>
<summary>Here the code of example, how to single event handler handle multiple of fields.</summary>

```jsx
import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
```

</details>

## ✒️ Write Concise Update Logic With Immer

Install immer :

```bash
npm install immer
```

use immer :

```jsx
 import { useImmer } from 'use-immer'
const [person,updatePerson] = useImmer({
  name : "",
  city : ""
});

updatePerson(draft => {
  draft..city = 'Lagos'; // update directly
});
```

<details>
<summary>How does immer work.</summary>
The draft provided by Immer is a special type of object, called a Proxy, that “records” what you do with it. This is why you can mutate it freely as much as you like! Under the hood, Immer figures out which parts of the draft have been changed, and produces a completely new object that contains your edits.
</details>
