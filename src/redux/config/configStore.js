import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "../RegisterSlice";
import Post from "../postSlice";
import PostsSlice from "../postsSlice";
import Write from "../writeSlice";

const store = configureStore({
  reducer: {
    RegisterSlice,
    Post,
    Write: Write.reducer,
    post: PostsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
