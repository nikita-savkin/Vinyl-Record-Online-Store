export interface SelectedFiltersType {
  artist?: string[];
  genre?: string[];
  label?: string[];
  year?: string[];
}

export interface ProductsFilterStateType {
  selectedFilters: SelectedFiltersType;
}
