import Products from '../models/products.js';

export const getProductById = async (req: any, res: any) => {
  const { productId } = req.query;

  try {
    const product = await Products.findById(productId);
    res.json({ product });
  } catch (e) {
    console.error(e);
  }
};
