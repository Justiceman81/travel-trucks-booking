import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/campers");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCampersById = createAsyncThunk(
  "campers/getCampersById",
  async (id, thunkApi) => {
    try {
      const { data } = await instance.get(`campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
