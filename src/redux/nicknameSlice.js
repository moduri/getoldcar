import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  nickname: null,
};

const nicknameSlice = createSlice({
  name: "getNickname",
  initialState,
  reducers: {
    SendNickname(state, action) {
      state.nickname = action.payload;
    },
  },
});

export const { SendNickname } = nicknameSlice.actions;
export default nicknameSlice.reducer;
