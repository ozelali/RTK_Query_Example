import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  code: string;
  name: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export interface Cart {
  balance: number;
  amount: number;
  toast: boolean;
  productList: Product[];
}

const initialState: Cart = {
  balance: 4250,
  amount: 0,
  toast: false,
  productList: [],
};

const cartListSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      if (state.balance - action.payload.price >= 0) {
        state.toast = false;
        let addedIndex = state.productList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (addedIndex > -1) {
          state.productList[addedIndex].quantity++;
        } else {
          state.productList.push(action.payload);
        }
        state.amount += action.payload.price;
        state.balance -= action.payload.price;
      } else {
        state.toast = true;
      }
    },
    remove: (state, action: PayloadAction<Product>) => {
      if (action.payload.quantity > 1) {
        let removedIndex = state.productList.findIndex(
          (item) => item.id === action.payload.id
        );
        state.productList[removedIndex].quantity--;
      } else {
        let productList = state.productList.filter(
          (data) => data.id !== action.payload.id
        );
        state.productList = productList;
      }
      state.balance += action.payload.price;
      state.amount -= action.payload.price;
      if (state.productList.length == 0) {
        state.balance = 4250;
        state.amount = 0;
      }
    },
  },
});

export default cartListSlice.reducer;
export const { add, remove } = cartListSlice.actions;
