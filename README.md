## Module : 7.6 - Linking and Navigating

there are four way to routing in next js :

- <Link /> Component
- useRouter hook (Client Component)
- redirect function (server function)
- History API (Browser API)

## Link

```jsx
import Link from "next/link";

<Link // it working like <a> tag
  href="path"
  scroll={false | true} // by default true for # navigation
/>;
```

> usePathname() hook to use for get pathname from client component.

## useRouter

```jsx
"use client";
// useRouter
import { useRouter } from "next/navigation";

const router = useRouter();

router.push("/dashboard", { scroll: false });
router.prefetch(); // for prefetch
```

## redirect

```jsx
import { redirect } from "next/navigation";

// for server component
redirect("path");
```

## Using Native History API

> `useSearchParams() ` for use get search params

> Browser history api must be used in client component.

## How Routing and Navigation Works

- Code Spliting
- Prefetching
- Caching
- Partial Rendering
- Soft Navigation
- Back and Forward Navigation
- Routing between `pages/` and `app/`
