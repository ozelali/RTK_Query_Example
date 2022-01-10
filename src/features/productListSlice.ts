import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productListApi } from '../service/productList.api';

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

const initialState: Product[] = [];

const productListSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productListApi.endpoints.getProductList.matchFulfilled,
      (_state, action: PayloadAction) => {
        return action.payload;
      }
    );
  },
});

export default productListSlice.reducer;
