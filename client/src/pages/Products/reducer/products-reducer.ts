import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductsStateType, FetchProductsPayloadType } from '@pages/Products/types/products-reducer-types';

const initialState: ProductsStateType = {
  allProducts: [],
  isProductsLoading: false,
  fetchErrorMessage: null,
  firstVisibleId: null,
  lastVisibleId: null,
  totalPages: 3,
  currentPage: 1,
};

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getFetchProducts: (state, action: PayloadAction<FetchProductsPayloadType>) => {
      state.isProductsLoading = true;

      switch (action.payload.directionType) {
        case 'next': {
          state.currentPage += 1;
          break;
        }
        case 'prev': {
          if (state.currentPage > 1) state.currentPage += 1;
          break;
        }
      }
    },
    getProductsSuccess: (state, action) => {
      state.allProducts = action.payload.products;
      state.lastVisibleId = action.payload.lastVisibleId ?? null;
      state.firstVisibleId = action.payload.firstVisibleId ?? null;
      state.isProductsLoading = false;
    },
    getProductsFailure: (state) => {
      state.fetchErrorMessage = 'Не удалось загрузить товары';
      state.isProductsLoading = false;
    },
  },
});

export const { getFetchProducts, getProductsSuccess, getProductsFailure } = products.actions;

export default products.reducer;
