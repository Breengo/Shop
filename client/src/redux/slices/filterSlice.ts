import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IFilterState {
  options: string[];
  price: number[];
  milleage: boolean;
}

const initialState: IFilterState = {
  options: [],
  price: [0, 1000000],
  milleage: true,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilterOption: (state, action: PayloadAction<string>) => {
      const property = action.payload.split(":")[0];
      const value = action.payload.split(":")[1];
      let existedFilter = -1;
      state.options.forEach((item, index) =>
        item.split(":")[0] === property ? (existedFilter = index) : item
      );
      if (existedFilter !== -1) {
        console.log(property);
        if (!value) {
          state.options.splice(existedFilter, 1);
        } else {
          state.options[existedFilter] = action.payload;
        }
      } else {
        if (value) state.options.push(action.payload);
      }
    },
    changePriceFilter: (state, action: PayloadAction<number[]>) => {
      state.price = action.payload;
    },
    changeMilleageFilter: (state) => {
      state.milleage = !state.milleage;
    },
    clearFilters: (state) => {
      state.options = [];
      state.price = [0, 1000000];
      state.milleage = true;
    },
  },
});

export const {
  changeFilterOption,
  clearFilters,
  changeMilleageFilter,
  changePriceFilter,
} = filterSlice.actions;

export const selectFiltOpts = (state: RootState) => state.filter.options;
export default filterSlice.reducer;
