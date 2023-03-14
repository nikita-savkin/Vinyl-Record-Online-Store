import { ProductFull } from '@shared/types/common-types';

export interface ProductsStateType {
  allProducts: ProductFull[];
  isProductsLoading: boolean;
  fetchErrorMessage: string | null;
  totalPages: number;
  limit: number;
  currentPage: number;
  sorting: SortingOptionType | null;
}

export interface FetchProductsPayloadType {
  params: {
    page: number | string;
    limit: number | string;
  };
}

export interface SortingOptionType {
  sortBy: string;
  direction: 'asc' | 'desc';
  value?: string;
  label?: string;
}
