import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IOrderState {
  order: string;
  direction: string;
}

const initialState: IOrderState = {
  order: "Date",
  direction: "DESC",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    changeOrder: (state, action: PayloadAction<string>) => {
      state.order = action.payload;
    },
    changeOrderDirection: (state) => {
      if (state.direction === "DESC") {
        state.direction = "ASC";
      } else {
        state.direction = "DESC";
      }
    },
    resetOrder: (state) => {
      state.order = "Date";
      state.direction = "DESC";
    },
  },
});

export const { changeOrderDirection, changeOrder, resetOrder } =
  orderSlice.actions;

export const selectFiltOpts = (state: RootState) => state.filter.options;
export default orderSlice.reducer;
