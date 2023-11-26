import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    CartData :[],
  },
  reducers: {
    add: (state, action) => {
      const itemcart = state.CartData.find((item) => item.id === action.payload.id);
      if (itemcart) {
        itemcart.quantity++;
      } else {
        state.CartData.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      return state.CartData.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
