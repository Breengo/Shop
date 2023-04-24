import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBikes = createAsyncThunk(
  "products/fetchAllBikes",
  async (reqParams: string) => {
    const response = await axios.get(
      `http://localhost:3000/api/getBikes/${reqParams}`
    );
    return response.data;
  }
);

export interface IBikesData {
  id: number;
  title: string;
  fuel: string;
  transmission: string;
  engine: string;
  finalDrive: string;
  color: string;
  image: string;
  price: number;
  milleage: number;
  timeStamp: string;
}

interface IBikesList {
  data: IBikesData[];
  loading: boolean;
}

const initialState: IBikesList = {
  data: [],
  loading: false,
};

const bikesSlice = createSlice({
  name: "bikes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBikes.pending, (state) => {
      state.data = [];
      state.loading = true;
    });
    builder.addCase(fetchBikes.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(fetchBikes.rejected, (state) => {
      state.data = [];
      state.loading = false;
    });
  },
});

export default bikesSlice.reducer;
