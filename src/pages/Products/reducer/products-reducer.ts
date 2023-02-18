import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductFull } from '@shared/types/common-types';

interface productsState {
  allProducts: ProductFull[];
  isProductsLoading: boolean;
  fetchErrorMessage: string | null;
  lastVisibleId: string | null;
  firstVisibleId: string | null;
  totalPages: number;
  currentPage: number;
}

interface fetchProductsPayloadType {
  firstVisibleId: string | null;
  lastVisibleId: string | null;
  directionType: 'next' | 'prev' | null;
}

const initialState: productsState = {
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
    getFetchProducts: (state, action: PayloadAction<fetchProductsPayloadType>) => {
      state.isProductsLoading = true;

      if (action.payload.directionType === 'next') state.currentPage += 1;

      if (action.payload.directionType === 'prev' && state.currentPage > 1) {
        state.currentPage -= 1;
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
