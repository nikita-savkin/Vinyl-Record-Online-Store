import axios from 'axios';
import { ProductsFilterStateType } from '@pages/Products/components/ProductsFilter/types/filter-state.types';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchProducts = (productsParams: ProductsFilterStateType) => {
  return API.get('/products', { params: productsParams });
};

export const fetchProductById = (productId: string) => {
  return API.get(`/product/${productId}`, { params: { productId } });
};

export const fetchFilterStructure = () => {
  return API.get('/products/filter-structure');
};
