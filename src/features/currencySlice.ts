import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currencyListApi } from '../service/currency.api';

const initialState: any = {};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      currencyListApi.endpoints.getCurrencyList.matchFulfilled,
      (_state, action: PayloadAction) => {
        return action.payload;
      }
    );
  },
});

export default currencySlice.reducer;
