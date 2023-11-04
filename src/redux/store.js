import { configureStore } from "@reduxjs/toolkit";
import { goodSlice } from "./goodSlice";
import { neutralSlice } from "./neutralSlice";
import { badSlice } from "./badSlice";

export const store = configureStore({
    reducer: {
        good:goodSlice.reducer,
        neutral:neutralSlice.reducer,
        bad:badSlice.reducer,
    },
  });