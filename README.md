# Module 3 : 3.16 : Passing Data Deeply With Context - Introduction to Context API

## 🗒️ Step to Using Context

<details>
<summary>1. Create a Context</summary>
Here syntax to create context :

```jsx
import { createContext } from "react";

export const LevelContext = createContext("defaultValue");
```

</details>

<details>
<summary>2. Use the Context</summary>
First import the context :

```jsx
import { useContext } from "react";
import { LevelContext } from "./LevelContext .js";
```

Read the context :

```jsx
export default function ComponentName() {
  const level = useContext(LevelContext);
}
```

</details>

<details>
<summary>3. Provide The Context</summary>
Here provide the context to all child component :

```jsx
import { LevelContext } from "./LevelContext.js";

export default function ParentComponent({ children }){
    return (
        <div>
            <LevelContext.Provider value={Value}>
                {children}
            </LevelContext>
        </div>
    )
}
```

</details>
