import { baseURL } from "@/constants/apiInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAircrafts = createAsyncThunk(
  "products/fetchAllAircrafts",
  async (reqParams: string) => {
    const response = await axios.get(
      `${baseURL}/api/getAircrafts/${reqParams}`
    );
    return response.data;
  }
);

export interface IAircraftsData {
  id: number;
  title: string;
  fuel: string;
  exteriorColor: string;
  interiorColor: string;
  image: string;
  price: number;
  milleage: number;
  timeStamp: string;
}

interface IAircraftsList {
  data: IAircraftsData[];
  loading: boolean;
}

const initialState: IAircraftsList = {
  data: [],
  loading: false,
};

const aircraftSlice = createSlice({
  name: "aircrafts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAircrafts.pending, (state) => {
      state.data = [];
      state.loading = true;
    });
    builder.addCase(fetchAircrafts.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(fetchAircrafts.rejected, (state) => {
      state.data = [];
      state.loading = false;
    });
  },
});

export default aircraftSlice.reducer;
