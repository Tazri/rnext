# Module 4 : 4.7 - Synchronizing with Effects - Overview of Effects vs Events

## 🖊️ How to Write Effect

- **Declare an Effect.** By default, your Effect will run after every render.
- **Specify the Effect dependencies.** Most Effects should only re-run when needed rather than after every render.
- **Add cleanup if needed.** Some Effects need to specify how to stop, undo, or clean up whatever they were doing.

> 🔴 Don’t rush to add Effects to your components.
