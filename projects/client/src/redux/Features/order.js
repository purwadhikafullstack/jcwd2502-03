import { createSlice } from "@reduxjs/toolkit";
import api from "./../../config/api";
const initialState = {
  counter: 0,
  cart: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

const getCart = async () => {
  try {
    // const res = await api.post("/order/dataCart")
  } catch (error) {}
};

export const { increment, setCart } = orderSlice.actions; // Remove setUsers if it's not defined

export const orderSliceReducer = orderSlice.reducer;
