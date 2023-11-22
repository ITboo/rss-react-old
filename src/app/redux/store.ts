import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./slices/searchSlice";
import detailsReducer from "./slices/detailsSlice";
import loaderReducer from "./slices/loaderSlice";
import paginationReducer from "./slices/paginationSlice";
import limitReducer from "./slices/limitSlice";

import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    search: searchReducer,
    details: detailsReducer,
    loader: loaderReducer,
    pagination: paginationReducer,
    limit: limitReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
