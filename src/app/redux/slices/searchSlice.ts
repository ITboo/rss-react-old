import { createSlice } from "@reduxjs/toolkit";
import { getUserQuery } from "../../utils/localStorage";

const query = getUserQuery();
const initialState = { searchValue: query === null ? "" : query };

const searchSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
