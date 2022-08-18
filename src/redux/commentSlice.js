import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";
import { server_url } from ".";

export const _PostComment = createAsyncThunk(
  "comment/post",
  async (comment) => {
    const result = await axios.post(
      server_url + `/api/comments/${comment.Id}`,
      { comment: comment.postCmt },
      {
        headers: {
          Authorization: `Bearer ${comment.token}`,
        },
      }
    );
    return { data: result.data, content: comment.postCmt };
  }
);

export const _GetComment = createAsyncThunk(
  "comment/get",
  async (value, thunkAPI) => {
    try {
      const result = await axios.get(server_url + `/api/comments/${value.id}`, {
        headers: {
          Authorization: `Bearer ${value.token}`,
        },
      });
      return thunkAPI.fulfillWithValue(result.data.allCommentInfo);
    } catch (error) {
      console.log(error);
    }
  }
);

export const _DeleteComment = createAsyncThunk(
  "comment/delete",
  async (value, thunkAPI) => {
    try {
      const result = await axios.delete(
        server_url + `/api/comments/${value.id}`,
        {
          headers: {
            Authorization: `Bearer ${value.token}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue({ data: result.data, id: value.id });
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};
export const CommentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [_GetComment.fulfilled]: (state, action) => {
      state.comment = action.payload;
    },
    [_GetComment.rejected]: (state, action) => {
      state.posts = [];
    },

    [_PostComment.fulfilled]: (state, action) => {
      const newdata = current(state.comment).concat(action.payload.data.data);
      state.comment = newdata;
    },
    [_PostComment.rejected]: (state, action) => {
      state.posts = [];
    },

    [_DeleteComment.fulfilled]: (state, action) => {
      if (action.payload.data.message == "댓글을 삭제하였습니다.") {
        const filteredState = state.comment.filter((value) => {
          return value.commentId !== action.payload.id;
        });
        state.comment = filteredState;
      }
    },
    [_DeleteComment.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default CommentsSlice.reducer;
