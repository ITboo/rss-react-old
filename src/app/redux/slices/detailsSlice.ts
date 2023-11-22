import { createSlice } from "@reduxjs/toolkit";

const initialState = { loadingDetails: false };

const detailsSlice = createSlice({
  name: "loadingDetails",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.loadingDetails = action.payload;
    },
  },
});

export const { setDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
