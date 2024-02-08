# Module 4 : 4.9 - Synchronizing with Effects - Handling Effects Firing Twice in Development

React intentionally remounts your components in development to find bugs like in the last example. The right question isn’t “how to run an Effect once”, but “how to fix my Effect so that it works after remounting”.

Usually, the answer is to implement the cleanup function. The cleanup function should stop or undo whatever the Effect was doing. The rule of thumb is that the user shouldn’t be able to distinguish between the Effect running once (as in production) and a setup → cleanup → setup sequence (as you’d see in development).

Most of the Effects you’ll write will fit into one of the common patterns below.
