import { ProductFull } from '@shared/types/common-types';

export interface ProductsStateType {
  allProducts: ProductFull[];
  isProductsLoading: boolean;
  fetchErrorMessage: string | null;
  totalPages: number;
  limit: number;
  currentPage: number;
}

export interface FetchProductsPayloadType {
  params: {
    page: number | string;
    limit: number | string;
  };
}
