import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "./counterSlice";

const store = configureStore({
  reducer: {
    count: counterSlices,
  },
});

export default store;
