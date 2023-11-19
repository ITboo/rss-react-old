import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./slices/searchSlice";
import detailsReducer from "./slices/detailsSlice";
import loaderSlice from "./slices/loaderSlice";

import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    search: searchReducer,
    modal: detailsReducer,
    loader: loaderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
