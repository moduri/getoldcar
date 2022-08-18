import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";
import { server_url } from ".";
import { Navigate } from "react-router-dom";

export const pickPostAysnc = createAsyncThunk(
  "post/pickPost",
  async (value, thunkAPI) => {
    try {
      const res = await axios.get(server_url + `/api/posts/${value.id}`, {
        headers: {
          Authorization: `Bearer ${value.cookie}`,
        },
      });
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
      const res = await axios.delete(server_url + `/api/posts/${value.id}`, {
        headers: {
          Authorization: `Bearer ${value.cookie}`,
        },
      });
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      if (thunkAPI.rejectWithValue(error))
        alert("다른사용자의 게시글을 삭제할 수 없습니다!");
      // return thunkAPI.rejectWithValue(error);
    }
  }
);

//메인세서 선택한 게시글 수정
export const updatePost = createAsyncThunk(
  "detail/update",
  async (value, thunkAPI) => {
    try {
      const res = await axios.put(
        server_url + `/api/posts/${value[0].postId}`,
        value[1],
        {
          headers: {
            Authorization: `Bearer ${value[0].cookie}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      if (thunkAPI.rejectWithValue(error))
        alert("다른사용자의 게시글을 수정 할 수 없습니다!");
      Navigate("/");
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
      .addCase(updatePost.fulfilled, (state, action) => {
        // console.log(current(state.posts));

        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(deletePost.rejected, (state, action) => {
        console.log(action);
      })

      .addCase(pickPostAysnc.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export default PostSlice;
