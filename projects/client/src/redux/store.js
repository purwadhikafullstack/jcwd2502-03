import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer/auth";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
