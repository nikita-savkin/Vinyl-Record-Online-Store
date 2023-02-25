import { ProductFull } from '@shared/types/common-types';

export interface ProductsStateType {
  allProducts: ProductFull[];
  isProductsLoading: boolean;
  fetchErrorMessage: string | null;
  lastVisibleId: string | null;
  firstVisibleId: string | null;
  totalPages: number;
  currentPage: number;
}

export interface FetchProductsPayloadType {
  firstVisibleId: string | null;
  lastVisibleId: string | null;
  directionType: 'next' | 'prev' | null;
  selectedFilters: {};
}
