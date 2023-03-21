import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductFull } from '@shared/types/common-types';

interface CartState {
  showCart: boolean;
  selectedProducts: ProductFull[];
}

const initialState: CartState = {
  showCart: false,
  selectedProducts: [],
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
    addProduct: (state, action: PayloadAction<ProductFull>) => {
      const hasProduct = state.selectedProducts.some((product) => product._id === action.payload._id);
      if (!hasProduct) state.selectedProducts.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string | null>) => {
      state.selectedProducts = state.selectedProducts.filter((product) => product._id !== action.payload);
    },
  },
});

export const { toggleCart, addProduct, removeProduct } = cart.actions;

export default cart.reducer;
