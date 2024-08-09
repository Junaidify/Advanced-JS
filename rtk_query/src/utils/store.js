import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { logAction, logPayload } from "../hooks/logAction";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logAction, logPayload),
});
