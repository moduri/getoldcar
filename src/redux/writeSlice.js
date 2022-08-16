import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";


export const postWritesThunk = createAsyncThunk(
  "write->db",
  async (dd,thunkAPI) => {
    console.log(dd);
    const headers = {
    Authorization: `Bearer ${dd[1].id.id }`,
    }
    console.log(headers);
    try {
      const response = await axios.post(`http://13.209.87.191/api/posts`,dd,{headers});
      return thunkAPI.fulfillWithValue(response.data);
      // return response.data;
    }
  }
)


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

export default Write.reducer;

