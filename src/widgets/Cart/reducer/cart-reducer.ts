import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@shared/context/products-context/types/types';

interface CartState {
  showCart: boolean;
  selectedProducts: Product[];
}

const initialState: CartState = {
  showCart: false,
  selectedProducts: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProducts.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number | null>) => {
      state.selectedProducts = state.selectedProducts.filter((product) => product.id !== action.payload);
    },
  },
});

export const { toggleCart, addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
