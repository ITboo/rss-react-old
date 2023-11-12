import { createContext } from "react";
import { AppContext } from "../types/contextTypes";

const AppContext = createContext<AppContext>({
  appData: {
    charactersList: [],
    nextPage: null,
    previousPage: null,
    error: false,
    errorMsg: "",
    loading: false,
    query: "",
    charactersOnPage: 20,
    currentPage: 1,
  },
  setAppData: () => {},
});

export default AppContext;
