import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface queryParamsState {
  searchParams: string;
  limit: string;
  page: string;
  isNextPage: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: queryParamsState = {
  searchParams: localStorage.getItem("inputValue") || "",
  limit: "10",
  page: "1",
  isNextPage: true,
  isLoading: false,
  error: "",
};

export const paginationSlice = createSlice({
  name: "queryParams",
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<string>) {
      state.limit = action.payload;
    },
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
    setSearchParams(state, action: PayloadAction<string>) {
      state.searchParams = action.payload;
    },
    setIsNextPage(state, action: PayloadAction<boolean>) {
      state.isNextPage = action.payload;
    },
  },
});

export const { setLimit, setPage, setSearchParams, setIsNextPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
