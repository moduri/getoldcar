import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const _GetRegister = createAsyncThunk("/register", async (value) => {
  console.log(value);
  // const result = await axios.post(`좌표`, value);
});

const initialState = {
  article: {
    id: 0,
    name: "",
    title: "",
    content: "",
  },
  isLoading: false,
  error: null,
};

const RegisterSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: {},
});

export default RegisterSlice.reducer;
