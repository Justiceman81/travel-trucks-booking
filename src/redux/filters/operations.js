// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { instance } from "../campers/operations.js";

// export const fetchFilteredVehicles = createAsyncThunk(
//   "vehicles/fetchFilteredVehicles",
//   async ({ id, location, form, criteria }, { rejectWithValue }) => {
//     try {
//       const params = {};

//       if (location) params.location = location;
//       if (form) params.form = form;
//       if (criteria && criteria.length > 0) {
//         criteria.forEach((criterion) => {
//           params[criterion] = true;
//         });
//       }

//       const response = await instance.get(`campers/${id}}`, { params });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { instance } from "../campers/operations.js";

// export const fetchFilteredVehicles = createAsyncThunk(
//   "vehicles/fetchFilteredVehicles",
//   async (filters, { rejectWithValue }) => {
//     try {
//       const params = {};

//       // Додавання фільтрів до параметрів запиту
//       Object.entries(filters).forEach(([key, value]) => {
//         if (value !== "" && value !== false) {
//           params[key] = value;
//         }
//       });

//       const response = await instance.get(`campers`, { params });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || "Failed to fetch filtered vehicles"
//       );
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../campers/operations.js";
import { resetItems } from "./slice.js";

export const fetchFilteredVehicles = createAsyncThunk(
  "vehicles/fetchFilteredVehicles",
  async (filters, { dispatch, rejectWithValue }) => {
    try {
      dispatch(resetItems()); // Очищення перед новим запитом
      const params = {
        location: filters.location || undefined,
        type: filters.type || undefined,
        ...filters.criteria.reduce((acc, criterion) => {
          acc[criterion] = true;
          return acc;
        }, {}),
      };
      const response = await instance.get("/campers", { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
