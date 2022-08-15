import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postWritesThunk = createAsyncThunk(
  "write->db",
  async (ddd, thunkAPI) => {
    try {
      const response = await axios.post(`http://13.209.87.191/api/posts`, ddd);
      console.log("포스트 성공!")
      return response.data;
    } catch (error) {
      console.log("에러발생")
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
