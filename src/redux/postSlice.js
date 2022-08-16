import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

// const mydata = [
//   {
//     postId: 2,
//     userId: 1,
//     nickname: "디벨로퍼",
//     title:
//       "안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.https://www.naver.com",
//     createdAt: "22.08.04",
//     updatedAt: "22.08.04",
//   },

//   {
//     postId: 11,
//     userId: 1,
//     nickname: "디벨로퍼",
//     title:
//       "안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.https://www.naver.com",
//     createdAt: "22.08.04",
//     updatedAt: "22.08.04",
//   },
//   {
//     postId: 22,
//     userId: 1,
//     nickname: "디벨로퍼",
//     title:
//       "안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.안녕하세요 22번째 게시글 제목입니다.https://www.naver.com",
//     createdAt: "22.08.04",
//     updatedAt: "22.08.04",
//   },

//   {
//     postId: 4,
//     userId: 3,
//     nickname: "디벨로퍼",
//     title: "안녕하세요 44번째 게시글 제목입니다.",
//     createdAt: "2022-08-03T20:55:18.000Z",
//     updatedAt: "2022-08-03T20:55:18.000Z",
//   },
// ];

export const _GetPosted = createAsyncThunk(
  "/register",
  async (value, thunkAPI) => {
    console.log(value);
    try {
      const result = await axios.get("http://13.209.87.191/api");
      console.log(result);

      return thunkAPI.fulfillWithValue(result.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const PostSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [_GetPosted.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [_GetPosted.rejected]: (state, action) => {
      console.log(action.payload.message);
    },
  },
});

export default PostSlice.reducer;
