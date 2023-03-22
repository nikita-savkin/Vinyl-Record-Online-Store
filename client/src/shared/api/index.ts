import axios from 'axios';
import { ProductsFilterStateType } from '@pages/Products/components/ProductsFilter/types/filter-state.types';

const baseURL = 'https://vinyl-adventure.onrender.com';

const API = axios.create({ baseURL });

export const fetchProducts = (productsParams: ProductsFilterStateType) => {
  return API.get('/products', { params: productsParams });
};

export const fetchProductById = (productId: string) => {
  return API.get(`/product/${productId}`, { params: { productId } });
};

export const fetchFilterStructure = () => {
  return API.get('/products/filter-structure');
};
