import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { fetchProductsFromStorage } from '@shared/firebase/utils/products-utils';
import { ProductFull } from '@shared/types/common-types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    fetchProducts: build.query<ProductFull[], void>({
      async queryFn(): Promise<{ data: ProductFull[] }> {
        try {
          const products = await fetchProductsFromStorage();
          return { data: products };
        } catch (e) {
          console.error(e);
          return { data: [] };
        }
      },
    }),
  }),
});

export const { useFetchProductsQuery } = productsApi;
