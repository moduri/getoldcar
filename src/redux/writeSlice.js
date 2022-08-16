import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

export const postWritesThunk = createAsyncThunk(
  "user/write",
  async (data, thunkAPI) => {
    try {
      console.log(data[0], data[1].id);
      const response = await axios.post(
        `http://13.209.87.191/api/posts`,
        data[0]
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  writed: [],
  isLoading: false,
  error: null,
};
const Write = createSlice({
  name: "writed",
  initialState,
  reducers: {},
  extraReducers: {
    [postWritesThunk.fulfilled]: (state, action) => {
      console.log(current(state), action);
    },
    [postWritesThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default Write.reducer;
