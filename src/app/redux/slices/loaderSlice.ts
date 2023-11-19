import { createSlice } from "@reduxjs/toolkit";

interface LoaderState {
  searchLoader: boolean;
  detailsLoader: boolean;
}

const initialState: LoaderState = {
  searchLoader: false,
  detailsLoader: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoader(state, action) {
      switch (action.payload.loader) {
        case "search":
          state.searchLoader = action.payload.value;
          break;

        case "details":
          state.detailsLoader = action.payload.value;
          break;
      }
    },
  },
});

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
