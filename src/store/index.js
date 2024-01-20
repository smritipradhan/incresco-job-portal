import { configureStore } from "@reduxjs/toolkit";
import jobFilterReducer from "./slices/jobFilterSlice";

const store = configureStore({
  reducer: {
    jobFilter: jobFilterReducer,
  },
});

export default store;
