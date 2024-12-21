import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCampersById } from "./operations.js";

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
  likes: JSON.parse(localStorage.getItem("likes")) || [],
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload;
      const isLike = state.likes.includes(id);
      if (isLike) {
        state.likes = state.likes.filter((likeId) => likeId !== id);
      } else {
        state.likes.push(id);
      }
      localStorage.setItem("likes", JSON.stringify(state.likes));
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCampersById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampersById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getCampersById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { toggleLike } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
