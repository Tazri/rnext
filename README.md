# Module 4 : 4.19 - Separting Events from Effects - Part 2

## ✒️ useEffectEvent

**`useEffectEvent` use for sperate the event from effect.**

Here is example :

```jsx
import { experimental_useEffectEvent as useEffectEvent } from "react";
```

```jsx
const notify = useEffectEvent((id) => {
  toast.success("Connected With : " + id, {
    theme: theme,
  });
});

useEffect(() => {
  const connection = createConnection(serverUrl, roomId);

  connection.connect();
  notify(roomId);

  return () => {
    connection.disconnect();
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [roomId]);

// now dependencie id is missing.
```
