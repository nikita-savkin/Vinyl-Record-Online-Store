import express from 'express';

const productRouter = express.Router();

import { getProductById } from '../controllers/product.js';

productRouter.get('/:id', getProductById);

export default productRouter;
