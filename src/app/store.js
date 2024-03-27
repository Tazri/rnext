import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/counterSlice";
import postsSliceReducer from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counters: countersReducer,
    posts: postsSliceReducer,
  },
});

export default store;
