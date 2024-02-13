# Module 4 : 4.26 - Reusing Logic with Custom Hooks - Part 4

This is another reason for why wrapping Effects in custom Hooks is often beneficial:

- You make the data flow to and from your Effects very explicit.
- You let your components focus on the intent rather than on the exact implementation of your Effects.
- When React adds new features, you can remove those Effects without changing any of your components.
