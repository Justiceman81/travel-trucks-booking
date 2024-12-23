// import { createSlice } from "@reduxjs/toolkit";
// import { fetchFilteredVehicles } from "./operations.js";

// const filtersSlice = createSlice({
//   name: "vehicles",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchFilteredVehicles.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchFilteredVehicles.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchFilteredVehicles.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { changeFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";
// import { fetchFilteredVehicles } from "./operations.js";

// const filtersSlice = createSlice({
//   name: "vehicles",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//     filters: {
//       location: "",
//       ac: false,
//       automatic: false,
//       petrol: false,
//       kitchen: false,
//       tv: false,
//       bathroom: false,
//       radio: false,
//       refrigerator: false,
//       water: false,
//       gas: false,
//       microwave: false,
//     },
//   },
//   reducers: {
//     changeFilter: (state, action) => {
//       const { key, value } = action.payload;
//       state.filters[key] = value;
//     },
//     resetFilters: (state) => {
//       state.filters = {
//         location: "",
//         ac: false,
//         automatic: false,
//         petrol: false,
//         kitchen: false,
//         tv: false,
//         bathroom: false,
//         radio: false,
//         refrigerator: false,
//         water: false,
//         gas: false,
//         microwave: false,
//       };
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchFilteredVehicles.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchFilteredVehicles.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchFilteredVehicles.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { changeFilter, resetFilters } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredVehicles } from "./operations";

const filtersSlice = createSlice({
  name: "vehicles",
  initialState: {
    items: [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    loading: false,
    error: null,
    filters: {
      location: "",
      type: "",
      criteria: [],
    },
  },
  reducers: {
    changeFilter(state, action) {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    toggleFavorite(state, action) {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    resetItems(state) {
      state.items = [];
    },
  },
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

export const { changeFilter, toggleFavorite, resetItems } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
