import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import cartListSlice from '../features/cartListSlice';
import currencySlice from '../features/currencySlice';
import productListSlice from '../features/productListSlice';
import { currencyListApi } from '../service/currency.api';
import { productListApi } from '../service/productList.api';

const store = configureStore({
  reducer: {
    [productListApi.reducerPath]: productListApi.reducer,
    [currencyListApi.reducerPath]: currencyListApi.reducer,
    products: productListSlice,
    cart: cartListSlice,
    currency: currencySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productListApi.middleware,
      currencyListApi.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
