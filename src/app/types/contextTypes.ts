import { Character } from "./types";

interface AppState {
  cardList?: Character[];
  isLoading?: boolean;
  charactersOnPage?: number;
  currentPage?: number;
}

export interface AppContext {
  appData: AppState;
  setAppData?: React.Dispatch<React.SetStateAction<AppState>>;
}
