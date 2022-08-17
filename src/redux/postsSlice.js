import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

export const pickPostAysnc = createAsyncThunk(
  "post/pickPost",
  async (value, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://13.209.87.191/api/posts/${value.id}`,
        {
          headers: {
            Authorization: `Bearer ${value.cookie}`,
          },
        }
      );
      console.log(res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//메인에서 선택한 게시글 삭제
export const deletePost = createAsyncThunk(
  "delte/detailpost",
  async (value, thunkAPI) => {
    try {
      const res = await axios.delete(
        `http://13.209.87.191/api/posts/${value.id}`,
        {
          headers: {
            Authorization: `Bearer ${value.cookie}`,
          },
        }
      );
      console.log(res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const getPostAysnc = createAsyncThunk(
//   "post/getPost",
//   async (thunkAPI) => {
//     try {
//       const res = await axios.get(`http://13.209.87.191/api`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

//메인세서 선택한 게시글 수정
export const updatePost = createAsyncThunk(
  "detail/update",
  async (value, thunkAPI) => {
    try {
      console.log("수정해보자");
      console.log(value);
      console.log(value.id);
      const res = await axios.put(
        `http://13.209.87.191/api/posts/${value.id}`,
        value[0],
        {
          headers: {
            Authorization: `Bearer ${value.cookie}`,
          },
        }
      );
      console.log(value);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log("없");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const PostSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(getPostAysnc.fulfilled, (state, action) => ({
      //   ...state,
      //   data: action.payload,
      // }))
      .addCase(updatePost.fulfilled, (state, action) => {
        console.log("업뎃확인");
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        console.log("1");
        state.posts = action.payload;
      })
      .addCase(pickPostAysnc.fulfilled, (state, action) => {
        console.log(current(state.posts));
        state.posts = action.payload;
      });
  },
});

export default PostSlice;
