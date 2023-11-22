import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character } from "../../types/types";
import { API_URL } from "../../constants/constants";

export interface Data {
  info: {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
  };
  results: Character[];
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (builder) => ({
    getCharacters: builder.query<Data, string>({
      query: (term) => `/character/${term}`,
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = api;
