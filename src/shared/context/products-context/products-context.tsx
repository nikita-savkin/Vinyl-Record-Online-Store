import { useState, createContext, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import type { Product } from '@shared/context/products-context/types/types';
import { addProductsToStorage, fetchProductsFromStorage } from '@shared/firebase/utils/products-utils';
// import PRODUCTS from '@shared/context/products-context/products.json';

export interface ProductsContext {
  products: Product[] | [];
  setProducts: Dispatch<SetStateAction<Product[] | []>>;
}

export const ProductsContext = createContext<ProductsContext>({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const value = { products, setProducts };

  // const addProducts = async () => {
  //   try {
  //     return await addProductsToStorage('products', 'music', PRODUCTS);
  //   } catch (e) {
  //     return console.error(e);
  //   }
  // };

  const fetchProducts = async () => {
    try {
      const products = await fetchProductsFromStorage();
      setProducts(products);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts();

    // @TODO убрать загрузку в firebase
    // addProducts();
  }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
