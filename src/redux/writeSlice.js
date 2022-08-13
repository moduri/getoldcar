import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postWritesThunk = createAsyncThunk(
  "write->db",
  async (ddd, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/write", ddd);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Write = createSlice({
  name: "????",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postWritesThunk.pending, (state, action) => {})
      .addCase(postWritesThunk.fulfilled, (state, action) => {
        state.data?.push(action.payload);
      })
      .addCase(postWritesThunk.rejected, (state, action) => {});
  },
});

export default Write;
