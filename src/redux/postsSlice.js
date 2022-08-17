import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

export const pickPostAysnc = createAsyncThunk(
  "post/pickPost",
  async (value, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://13.209.87.191/api/posts/${value.id}`,
        {
          headers: {
            Authorization: `Bearer ${value.cookie}`,
          },
        }
      );

      return thunkAPI.fulfillWithValue(res.data);
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

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const PostSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostAysnc.fulfilled, (state, action) => ({
        ...state,
        data: action.payload,
      }))
      .addCase(pickPostAysnc.fulfilled, (state, action) => {
        console.log(current(state.posts));
        state.posts = action.payload;
      });
  },
});

export default PostSlice;
