import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredVehicles } from "./operations.js";

const filtersSlice = createSlice({
  name: "vehicles",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchFilteredVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
