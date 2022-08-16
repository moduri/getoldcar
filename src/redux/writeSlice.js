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
    } catch (error) {
      console.log("에러발생")
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Write = createSlice({
  name: "????",
  initialState:{},
  reducers: {},
  extraReducers : {
    [postWritesThunk.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  }
});

export default Write.reducer;

