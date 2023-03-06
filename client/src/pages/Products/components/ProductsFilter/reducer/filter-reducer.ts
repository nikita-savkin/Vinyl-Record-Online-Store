import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
  ProductsFilterStateType,
  SelectedFiltersType,
} from '@pages/Products/components/ProductsFilter/types/filter-state.types';

const initialState: ProductsFilterStateType = {
  selectedFilters: {},
};

export const productsFilter = createSlice({
  name: 'productsFilter',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<SelectedFiltersType>) => {
      state.selectedFilters = action.payload;
    },
  },
});

export const { setFilters } = productsFilter.actions;

export default productsFilter.reducer;
