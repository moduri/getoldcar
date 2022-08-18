import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";
import { server_url } from ".";

export const _GetUserData = createAsyncThunk(
  "user/Login",
  async (userInptData, thunkAPI) => {
    try {
      const result = await axios.post(server_url + `/api/login`, userInptData);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  register: {
    nickname: "",
  },
  isLoading: false,
  error: null,
};
const RegisterSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [_GetUserData.fulfilled]: (state, action) => {
      console.log(current(state), action);
      state.article = action.payload;
    },
    [_GetUserData.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default RegisterSlice.reducer;
