import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductsStateType, FetchProductsPayloadType } from '@pages/Products/types/products-reducer-types';

const START_PAGE = 1;
const TOTAL_PAGES = 1;
const DEFAULT_PAGE_SIZE = 9;
const FETCH_ERROR_MESSAGE = 'Error in products loading';

const initialState: ProductsStateType = {
  allProducts: [],
  isProductsLoading: false,
  fetchErrorMessage: null,
  limit: DEFAULT_PAGE_SIZE,
  totalPages: TOTAL_PAGES,
  currentPage: START_PAGE,
};

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getFetchProducts: (state, action: PayloadAction<FetchProductsPayloadType>) => {
      state.isProductsLoading = true;
    },
    getProductsSuccess: (state, action) => {
      const { products, total } = action.payload;

      state.allProducts = products;
      state.totalPages = total;
      state.isProductsLoading = false;
    },
    getProductsFailure: (state) => {
      state.fetchErrorMessage = FETCH_ERROR_MESSAGE;
      state.isProductsLoading = false;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { getFetchProducts, getProductsSuccess, getProductsFailure, setPage, setLimit } = products.actions;

export default products.reducer;
