import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/api";
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

  } catch (error) {
    console.log(error);
  }
};

export const { increment, setCart } = orderSlice.actions; 

export const orderSliceReducer = orderSlice.reducer;
