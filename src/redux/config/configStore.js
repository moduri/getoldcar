import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "../RegisterSlice";

const store = configureStore({
  reducer: { RegisterSlice },
});

export default store;
