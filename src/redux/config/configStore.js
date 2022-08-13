import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "../RegisterSlice";
import Post from "../postSlice";

const store = configureStore({
  reducer: { RegisterSlice, Post },
});

export default store;
