import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
  ProductsFilterStateType,
  SelectedFiltersType,
  FilterStructureType,
} from '@pages/Products/components/ProductsFilter/types/filter-state.types';

const FILTER_LOADING_ERROR = 'An error occurred while loading the filter structure';

const initialState: ProductsFilterStateType = {
  filterStructure: {
    tree: [],
    prices: {
      min: 0,
      max: 0,
    },
  },
  selectedFilters: {},
  isFilterLoading: false,
  filterLoadingError: null,
};

export const productsFilter = createSlice({
  name: 'productsFilter',
  initialState,
  reducers: {
    getFilterStructure: (state) => {
      state.filterLoadingError = null;
      state.isFilterLoading = true;
    },
    setFilters: (state, action: PayloadAction<SelectedFiltersType>) => {
      state.selectedFilters = action.payload;
    },
    setFilterStructureSuccess: (state, action: PayloadAction<FilterStructureType>) => {
      state.filterStructure = action.payload;
    },
    setFilterStructureFailure: (state) => {
      state.filterLoadingError = FILTER_LOADING_ERROR;
    },
  },
});

export const { setFilters, getFilterStructure, setFilterStructureSuccess, setFilterStructureFailure } =
  productsFilter.actions;

export default productsFilter.reducer;
