import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cocktailApiHeaders = {
  "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
  "x-rapidapi-key": "4f78d877a3mshb70c46ee39302a9p153acbjsna0447edc3b46",
};

const baseUrl = "https://the-cocktail-db.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: cocktailApiHeaders });

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCocktails: builder.query({
      query: () => createRequest(`filter.php?a=Alcoholic`),
    }),
    getCocktailDetails: builder.query({
      query: (idDrink) => createRequest(`/lookup.php?i=${idDrink}`),
    }),
    getMocktails: builder.query({
      query: () => createRequest("/filter.php?a=Non%20Alcoholic")
    }),
    getPopularCocktail: builder.query({
      query: () => createRequest("popular.php")
    }),
    getLatestCocktail: builder.query({
      query : () => createRequest("latest.php")
    })
  }),
});

export const { useGetCocktailsQuery, useGetCocktailDetailsQuery, useGetMocktailsQuery, useGetPopularCocktailQuery, useGetLatestCocktailQuery } = cocktailApi;
