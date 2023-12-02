import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer/auth";
import  orderSlice  from "./Features/order";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    order: orderSlice,
  },
});
