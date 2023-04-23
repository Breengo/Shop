import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import filterReducer from "./slices/filterSlice";
import orderReducer from "./slices/orderSlice";
import productsReducer from "./slices/fetchProducts";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    order: orderReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
