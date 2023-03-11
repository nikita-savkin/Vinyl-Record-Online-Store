import express from 'express';

const productsRouter = express.Router();

import { getProducts, getFilterStructure } from '../controllers/products.js';

productsRouter.get('/', getProducts);
productsRouter.get('/filter-structure', getFilterStructure);

export default productsRouter;
