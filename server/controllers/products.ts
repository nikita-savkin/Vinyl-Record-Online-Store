import Products from '../models/products.js';

export const getProducts = async (req: any, res: any) => {
  // const { page } = req.query;

  try {
    // const LIMIT = 8;
    // const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

    const result = await Products.find().exec();

    // const total = await Accounts.countDocuments({});
    // const posts = await Accounts.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
    //
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
