import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface PerPageState {
  perPage: string;
}

const initialState: PerPageState = {
  perPage: "6",
};

export const limitSlice: Slice<PerPageState> = createSlice({
  name: "search",
  initialState,
  reducers: {
    setItemsPerPage: (state: PerPageState, actions: PayloadAction<string>) => {
      state.perPage = actions.payload;
    },
  },
});

export const { setItemsPerPage } = limitSlice.actions;
export default limitSlice.reducer;
