import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IFilterState {
  options: string[];
  upperPrice: number;
  bottomPrice: number;
  milleage: boolean;
}

const initialState: IFilterState = {
  options: [],
  upperPrice: 1000000,
  bottomPrice: 0,
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
        if (!value) {
          state.options.splice(existedFilter, 1);
        } else {
          state.options[existedFilter] = action.payload;
        }
      } else {
        if (value) state.options.push(action.payload);
      }
    },
    changePriceFilter: (state, { payload }: PayloadAction<number[]>) => {
      state.upperPrice = payload[1];
      state.bottomPrice = payload[0];
    },
    changeMilleageFilter: (state) => {
      state.milleage = !state.milleage;
    },
    clearFilters: (state) => {
      state.upperPrice = 1000000;
      state.bottomPrice = 0;
      state.options = [];
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
