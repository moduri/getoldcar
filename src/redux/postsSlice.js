

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const pickPostAysnc = createAsyncThunk(
  "post/pickPost",
  async (cd,thunkAPI) => {
    try {
      console.log(cd);
      const res = await axios.get(`http://13.209.87.191/api/posts/:postId`);
      console.log(res);
      return res.data;
      
      // return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
    
  }
);

export const getPostAysnc = createAsyncThunk(
  "post/getPost",
  async (thunkAPI) => {
    try {
      const res = await axios.get(`http://13.209.87.191/api/posts/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const PostsSlice = createSlice({
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

export default PostsSlice.reducer;
