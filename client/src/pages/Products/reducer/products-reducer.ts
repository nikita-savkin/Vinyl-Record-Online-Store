import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
  ProductsStateType,
  FetchProductsPayloadType,
  SortingOptionType,
} from '@pages/Products/types/products-reducer-types';
import {
  DEFAULT_PAGE_SIZE,
  TOTAL_PAGES,
  START_PAGE,
  SORTING_OPTIONS,
  FETCH_ERROR_MESSAGE,
} from '@pages/Products/constants';

const initialState: ProductsStateType = {
  allProducts: [],
  isProductsLoading: false,
  fetchErrorMessage: null,
  limit: DEFAULT_PAGE_SIZE,
  totalPages: TOTAL_PAGES,
  currentPage: START_PAGE,
  sorting: {
    sortBy: SORTING_OPTIONS[0]?.sortBy ?? '',
    direction: SORTING_OPTIONS[0]?.direction ?? 'asc',
  },
};

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getFetchProducts: (state, action: PayloadAction<FetchProductsPayloadType>) => {
      state.fetchErrorMessage = null;
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
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setSorting: (state, action: PayloadAction<SortingOptionType>) => {
      state.sorting = action.payload;
    },
  },
});

export const { getFetchProducts, getProductsSuccess, getProductsFailure, setPage, setLimit, setSorting } =
  products.actions;

export default products.reducer;
