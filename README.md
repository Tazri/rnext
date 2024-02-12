# Module 4 : 4.20 - Separting Events from Effects - Part 3

## ❌ Effect Events are very limited in how you can use them:

- Only call them from inside Effects.
- Never pass them to other components or Hooks.

## ☕ Recap

- Event handlers run in response to specific interactions.
- Effects run whenever synchronization is needed.
- Logic inside event handlers is not reactive.
- Logic inside Effects is reactive.
- You can move non-reactive logic from Effects into Effect Events.
- Only call Effect Events from inside Effects.
- Don’t pass Effect Events to other components or Hooks.
