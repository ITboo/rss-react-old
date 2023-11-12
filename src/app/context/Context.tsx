import { createContext } from "react";
import { AppContext } from "../types/contextTypes";

const AppContext = createContext<AppContext>({
  appData: {
    cardList: [],
    isLoading: false,
    charactersOnPage: 6,
    currentPage: 1,
  },
  setAppData: () => {},
});

export default AppContext;
