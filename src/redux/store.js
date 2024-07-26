import { configureStore } from "@reduxjs/toolkit";
import { combineSlices } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";
import { userSlice } from "./userSlice";

export const rootReducer = combineSlices(todoSlice, userSlice);

export const store = configureStore({
  reducer: rootReducer,
});
