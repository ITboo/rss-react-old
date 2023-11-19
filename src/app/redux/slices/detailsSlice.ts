import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DetailsState {
  id: number;
  isOpen: boolean;
}

const initialState: DetailsState = {
  id: 1,
  isOpen: false,
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    openModal: (state: DetailsState, action: PayloadAction<number>) => {
      state.id = action.payload;
      state.isOpen = true;
    },
    closeModal: (state: DetailsState) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = detailsSlice.actions;
export default detailsSlice.reducer;
