import { Character } from "./types";

interface AppState {
  charactersList?: Character[];
  nextPage?: null | string;
  previousPage?: null | string;
  loading?: boolean;
  query?: string;
  error?: boolean;
  errorMsg?: null | string;
  charactersOnPage?: number;
  currentPage?: number;
}

export interface AppContext {
  appData: AppState;
  setAppData?: React.Dispatch<React.SetStateAction<AppState>>;
}
