import { configureStore } from "@reduxjs/toolkit";
import favsReducer from "../features/favs/favsSlices";

export const store = configureStore({
  reducer: {
    favs: favsReducer,
  },
});
