import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../campers/operations.js";

export const fetchFilteredVehicles = createAsyncThunk(
  "vehicles/fetchFilteredVehicles",
  async ({ id, location, form, criteria }, { rejectWithValue }) => {
    try {
      const params = {};

      if (location) params.location = location;
      if (form) params.form = form;
      if (criteria && criteria.length > 0) {
        criteria.forEach((criterion) => {
          params[criterion] = true;
        });
      }

      const response = await instance.get(`campers/${id}}`, { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
