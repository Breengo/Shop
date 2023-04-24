import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import filterReducer from "./slices/filterSlice";
import orderReducer from "./slices/orderSlice";
import carsReducer from "./slices/fetchCars";
import bikesReducer from "./slices/fetchBikes";
import aircraftsReducer from "./slices/fetchAircrafts";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    order: orderReducer,
    cars: carsReducer,
    bikes: bikesReducer,
    aircrafts: aircraftsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
