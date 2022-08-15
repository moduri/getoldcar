import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const pickPostAysnc = createAsyncThunk(
  "post/pickPost",
  async (thunkAPI) => {
    try {
      const res = await axios.get(`http://13.209.87.191/api`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPostAysnc = createAsyncThunk(
  "post/getPost",
  async (thunkAPI) => {
    try {
      const res = await axios.get(`http://13.209.87.191/api`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const PostSlice = createSlice({
  name: "postReducer",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostAysnc.fulfilled, (state, action) => ({
        ...state,
        data: action.payload,
      }))
      .addCase(pickPostAysnc.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export default PostSlice;
