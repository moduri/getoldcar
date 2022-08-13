import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const _GetRegister = createAsyncThunk(
  "/register",
  async (value, thunkAPI) => {
    console.log(value);
    //   try {
    //     const result = await axios.post(`좌표`, value);
    //     return thunkAPI.fulfillWithValue(result.data);
    //   } catch (error) {
    //     return thunkAPI.rejectWithValue(error);
    //   }
  }
);

const initialState = {
  register: {
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
  reducers: {},
  extraReducers: {
    [_GetRegister.pending]: (state) => {
      state.isLoading = true;
    },
    [_GetRegister.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
    },
    [_GetRegister.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default RegisterSlice.reducer;
