import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment(state, action) {
      const id = action.payload;
      const counterIndex = state.findIndex((counter) => counter.id === id);

      if (counterIndex >= 0) {
        state[counterIndex].value++;
      }
    },
    decrement(state, action) {
      const id = action.payload;
      const counterIndex = state.findIndex((counter) => counter.id === id);

      if (counterIndex >= 0) {
        state[counterIndex].value--;
      }
    },
  },
});

const countersReducer = counterSlice.reducer;
export default countersReducer;
export const { increment, decrement } = counterSlice.actions;
