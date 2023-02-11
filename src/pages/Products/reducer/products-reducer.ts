import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsFromStorage } from '@shared/firebase/utils/products-utils';
import { ProductFull } from '@shared/types/common-types';

interface ProductsState {
  allProducts: ProductFull[];
}

const initialState: ProductsState = {
  allProducts: [],
};

export const fetchProducts = createAsyncThunk('users/fetchProducts', async (): Promise<ProductFull[]> => {
  return await fetchProductsFromStorage();
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
  },
});

export default productsSlice.reducer;
