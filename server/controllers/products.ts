import Products from '../models/products.js';

export const getProducts = async (req: any, res: any) => {
  const { page, limit, filters } = req.query;

  const parsedFilters = Object.keys(filters ?? {}).map((key) => {
    return {
      [key]: {
        $in: filters[key],
      },
    };
  });

  const filterSettings = {
    $and: parsedFilters,
  };

  try {
    const startIndex = (Number(page) - 1) * limit;
    const total = await Products.countDocuments(filterSettings);
    const products = await Products.find(filterSettings).sort({ _id: -1 }).limit(limit).skip(startIndex);

    res.json({ products, total });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
