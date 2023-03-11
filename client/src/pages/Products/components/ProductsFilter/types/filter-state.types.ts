export interface SelectedFiltersType {
  artist?: string[];
  genre?: string[];
  label?: string[];
  year?: string[];
  minPrice?: number;
  maxPrice?: number;
}

export interface FilterStructureType {
  tree:
    | {
        id: string;
        label: string;
        items: { id: string; label: string }[];
      }[];
  prices: {
    min: number;
    max: number;
  };
}

export interface ProductsFilterStateType {
  filterStructure: FilterStructureType;
  selectedFilters: SelectedFiltersType;
  isFilterLoading: boolean;
  filterLoadingError: string | null;
}
