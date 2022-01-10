import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productListApi = createApi({
  reducerPath: 'productListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61d18fc6da87830017e5928b.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getProductList: builder.mutation<any, void>({
      query: () => 'productlist',
    }),
  }),
});

export const { useGetProductListMutation } = productListApi;
