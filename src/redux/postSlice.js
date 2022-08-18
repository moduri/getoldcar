import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { server_url } from ".";

export const _GetPosted = createAsyncThunk(
  "/register",
  async (value, thunkAPI) => {
    try {
      const result = await axios.get(server_url + `/api`);
      return thunkAPI.fulfillWithValue(result.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const PostSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [_GetPosted.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [_GetPosted.rejected]: (state, action) => {
      console.log(action.payload.message);
    },
  },
});

export default PostSlice.reducer;
