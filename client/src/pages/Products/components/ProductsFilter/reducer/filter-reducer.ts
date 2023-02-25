import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectedFilterType {
  filterParent: string;
  filterItem: string;
}

interface ProductsFilterStateType {
  artist: string[];
  genre: string[];
  label: string[];
  year: string[];
}

const initialState: ProductsFilterStateType = {
  artist: [],
  genre: [],
  label: [],
  year: [],
};

export const productsFilter = createSlice({
  name: 'productsFilter',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<SelectedFilterType>) => {
      const { filterParent, filterItem } = action.payload;
      const currentParentFilter = state[filterParent as keyof ProductsFilterStateType] ?? null;

      if (currentParentFilter) {
        if (!currentParentFilter.includes(filterItem)) {
          currentParentFilter.push(filterItem);
        } else {
          const indexOfFilter = currentParentFilter.indexOf(filterItem);
          currentParentFilter.splice(indexOfFilter, 1);
        }
      }
    },
  },
});

export const { setFilters } = productsFilter.actions;

export default productsFilter.reducer;
