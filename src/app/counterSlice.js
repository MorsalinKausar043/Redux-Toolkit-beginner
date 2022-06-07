import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state,action) =>{
        state.value += 1;
    },
    decrement: (state, action) => {
        if(state.value > 0)
        state.value -= 1;
    },
  },
});

export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;