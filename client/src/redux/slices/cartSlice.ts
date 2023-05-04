import { createSlice } from "@reduxjs/toolkit";
import { IBikesData } from "./fetchBikes";
import { ICarsData } from "./fetchCars";
import { IAircraftsData } from "./fetchAircrafts";

interface ICartState {
  cart: (IBikesData | ICarsData | IAircraftsData)[];
}

const initialState: ICartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      state.cart.splice(payload, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
