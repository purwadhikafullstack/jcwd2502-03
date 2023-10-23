import { configureStore } from "@reduxjs/toolkit";
import { orderSliceReducer } from "../Features/order";

export const store = configureStore({
  reducer: {
    order: orderSliceReducer,
  },
});
