import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //로컬저장
import Post from "../postSlice";
import PostsSlice from "../postsSlice";
import Write from "../writeSlice";
import LoginSlice from "../LoginSlice";
import nicknameSlice from "../nicknameSlice";

export const store = configureStore({
  reducer: {
    nicknameSlice,
    Post,
    LoginSlice,
    Write: Write.reducer,
    post: PostsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// const persistConfig = {
//   key: "nicknameSlice",
//   storage,
//   whileList: ["nicknameSlice", "Post", "LoginSlice", "Write", "post"],
// };

// const rootReducer = combineReducers({
//   nicknameSlice,
//   Post,
//   LoginSlice,
//   Write: Write.reducer,
//   post: PostsSlice.reducer,
// });

// export { persistConfig };
export default store;
