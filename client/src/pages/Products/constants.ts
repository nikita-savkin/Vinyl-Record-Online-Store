import { SortingOptionType } from '@pages/Products/types/products-reducer-types';

export const START_PAGE = 1;
export const TOTAL_PAGES = 1;
export const DEFAULT_PAGE_SIZE = 9;
export const FETCH_ERROR_MESSAGE = 'An error occurred while loading the list of products';
export const SORTING_OPTIONS: SortingOptionType[] = [
  {
    value: 'artistAsc',
    sortBy: 'artist',
    direction: 'asc',
    label: 'Artist (A - B)',
  },
  {
    value: 'artistDesc',
    sortBy: 'artist',
    direction: 'desc',
    label: 'Artist (B - A)',
  },
  {
    value: 'priceAsc',
    sortBy: 'price',
    direction: 'asc',
    label: 'Price (min - max)',
  },
  {
    value: 'priceDesc',
    sortBy: 'price',
    direction: 'desc',
    label: 'Price (max - min)',
  },
];
