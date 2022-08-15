import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

export const _GetRegister = createAsyncThunk(
  "user/signup",
  async (userData, thunkAPI) => {
    try {
      console.log(userData);
      const result = await axios.post(
        `https://13.209.87.191/api/signup`,
        userData
      );
      console.log(result);
      return thunkAPI.fulfillWithValue(result.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const _GetUserData = createAsyncThunk(
  "user/Login",
  async (userInptData, thunkAPI) => {
    try {
      console.log(userInptData);
      const result = await axios.post(
        `https://13.209.87.191/api/login`,
        userInptData
      );
      console.log(result);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  register: {
    id: 0,
    name: "",
  },
  isLoading: false,
  error: null,
};

const RegisterSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [_GetRegister.fulfilled]: (state, action) => {
      console.log(current(state), action);
      state.article = action.payload;
    },
    [_GetRegister.rejected]: (state, action) => {
      state.error = action.payload;
    },

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
