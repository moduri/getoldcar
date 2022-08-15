import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const postWritesThunk = createAsyncThunk(
  "write->db",
  async (ddd, thunkAPI) => {
    console.log(ddd);
    const response = await axios.post(`http://13.209.87.191/api/posts`, ddd);
    console.log("포스트 성공!");
    console.log(response);
    return response.data;
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
        console.log(current(state));
        state.data?.push(action.payload);
      })
      .addCase(postWritesThunk.rejected, (state, action) => {});
  },
});

export default Write;
