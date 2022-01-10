import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyListApi = createApi({
  reducerPath: 'currencyListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.exchangerate.host/',
  }),
  endpoints: (builder) => ({
    getCurrencyList: builder.query<any, void>({
      query: () => 'latest?base=USD',
    }),
  }),
});

export const { useGetCurrencyListQuery } = currencyListApi;
