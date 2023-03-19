import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductCardStateType } from '@pages/ProductCard/types/product-card-types';
import { ProductFull } from '@shared/types/common-types';

const initialState: ProductCardStateType = {
  product: {
    _id: null,
    artist: '',
    album: '',
    label: '',
    genre: [],
    storageImgUrl: '',
    price: null,
    year: '',
  },
  isProductLoading: false,
};

export const productCard = createSlice({
  name: 'productCard',
  initialState,
  reducers: {
    getFetchProduct: (state, action: PayloadAction<string>) => {
      state.isProductLoading = true;
    },
    getProductSuccess: (state, action: PayloadAction<Record<string, ProductFull>>) => {
      if (action.payload.product) state.product = action.payload.product;
      state.isProductLoading = false;
    },
    getProductFailure: (state) => {
      state.isProductLoading = true;
    },
  },
});

export const { getFetchProduct, getProductSuccess, getProductFailure } = productCard.actions;

export default productCard.reducer;
