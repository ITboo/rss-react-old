export const API_URL = "https://rickandmortyapi.com/api/";

export const enum ROUTE {
  MAIN = "/",
  CHARACTER = "/page=:pageNum/characterId=:characterId",
  PAGE = "/page=:pageNum",
  SEARCH = "/search/:queryParam",
  NOTFOUND = "*",
  DEFAULT = "search",
}
