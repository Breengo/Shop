import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/constants/apiInstance";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "products/fetchAllCars",
  async (reqParams: string) => {
    console.log(`${baseURL}/api/getCars/${reqParams}`);
    const response = await axios.get(`${baseURL}/api/getCars/${reqParams}`);
    console.log(response);
    return response.data;
  }
);

export interface ICarsData {
  id: number;
  title: string;
  fuel: string;
  transmission: string;
  engine: string;
  drivetrain: string;
  interiorColor: string;
  exteriorColor: string;
  image: string;
  price: number;
  milleage: number;
  timeStamp: string;
}

interface ICarsList {
  data: ICarsData[];
  loading: boolean;
}

const initialState: ICarsList = {
  data: [],
  loading: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.data = [];
      state.loading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(fetchCars.rejected, (state) => {
      state.data = [];
      state.loading = false;
    });
  },
});

export default carsSlice.reducer;
