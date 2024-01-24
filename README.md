# Module 3 : 3.17 : Using and Providing Context from The Same Component

> 📘 It's possible to use context where it is providing. For example :

```jsx
import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="m-4 border-2 p-4">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
```
