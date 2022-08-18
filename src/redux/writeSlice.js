import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";
import { server_url } from ".";

export const postWritesThunk = createAsyncThunk(
  "user/write",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(server_url + `/api/posts`, data[0], {
        headers: {
          Authorization: `Bearer ${data[1].id}`,
        },
      });
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
      // console.log(current(state), action);
    },
    [postWritesThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default Write.reducer;
