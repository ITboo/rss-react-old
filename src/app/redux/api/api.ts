import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Character, CharacterData } from "../../types/types";
import { API_URL } from "../../constants/constants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getCharacterById: build.query<Character, number>({
      query: (id: number) => `/${id}`,
    }),
    getCharacters: build.query<Character[], string>({
      query: (name: string) => `/?name=${name}`,
      transformResponse: (res: CharacterData) => res.results,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = api;
