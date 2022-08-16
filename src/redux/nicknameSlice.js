import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  nickname: null,
};

const nicknameSlice = createSlice({
  name: "getNickname",
  initialState,
  reducers: {
    SendNickname(state, action) {
      console.log("슬라이스 도착");
      state.nickname = action.payload;
    },
  },
});

export const { SendNickname } = nicknameSlice.actions;
export default nicknameSlice.reducer;
