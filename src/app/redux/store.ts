import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./slices/searchSlice";
import modalReducer from "./slices/detailsSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    modal: modalReducer,
  },
});
