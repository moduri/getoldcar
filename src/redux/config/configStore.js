import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import Post from "../postSlice";
import PostsSlice from "../postsSlice";
import writeSlice from "../writeSlice";
import LoginSlice from "../LoginSlice";
import nicknameSlice from "../nicknameSlice";
import commentSlice from "../commentSlice";

export const store = configureStore({
  reducer: {
    nicknameSlice,
    Post,
    LoginSlice,
    writeSlice,
    post: PostsSlice.reducer,
    commentSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
