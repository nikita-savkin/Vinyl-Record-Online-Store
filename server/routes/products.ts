import express from 'express';

const productsRouter = express.Router();

import { getProducts } from '../controllers/products.js';

productsRouter.get('/', getProducts);

export default productsRouter;
