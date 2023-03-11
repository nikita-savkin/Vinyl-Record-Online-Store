import Products from '../models/products.js';
import FilterStructure from '../models/filter-structure.js';

export const getProducts = async (req: any, res: any) => {
  const { page, limit, filters } = req.query;

  const parsedFilters = Object.keys(filters ?? {}).map((key) => {
    return {
      [key]: Array.isArray(filters[key])
        ? {
            $in: filters[key],
          }
        : filters[key],
    };
  });

  const priceSettings = {
    ...((filters?.minPrice || filters?.maxPrice) && {
      price: {
        ...(filters?.minPrice && { $gte: filters?.minPrice }),
        ...(filters?.maxPrice && { $lte: filters?.maxPrice }),
      },
    }),
  };

  const filterSettings = {
    $and: [...parsedFilters, priceSettings],
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

export const getFilterStructure = async (req: any, res: any) => {
  try {
    const filterStructure = await FilterStructure.find();
    const maxPriceProduct = await getMinMaxPrices('max');
    const minPriceProduct = await getMinMaxPrices('min');

    res.json({
      tree: filterStructure,
      prices: {
        min: minPriceProduct,
        max: maxPriceProduct,
      },
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const getMinMaxPrices = async (minOrMax: 'min' | 'max') => {
  const currentKey = 'price';
  const prefix = minOrMax === 'max' ? '-' : '';

  return await Products.find()
    .sort(`${prefix}${currentKey}`)
    .limit(1)
    .select(`${currentKey} -_id`)
    .exec()
    .then((product) => {
      return product[0].price;
    })
    .catch(() => {
      return null;
    });
};
