import { useContext } from 'react';
import ProductsFilter from '@pages/Products/components/ProductsFilter/ProductsFilter';
import { ProductsContext } from '@shared/context/products-context/products-context';
import ProductPreview from '@shared/components/ProductPreview/ProductPreview';

import { ProductsPageWrapper, ProductsFilterWrapper, Layout } from '@pages/Products/ProductsPage.styles';

const ProductsPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <ProductsPageWrapper>
      <ProductsFilterWrapper>
        <h3>Filters</h3>
        <ProductsFilter />
      </ProductsFilterWrapper>
      <Layout>
        {products.map((product) => (
          <ProductPreview
            id={product.id}
            author={product.author}
            albumName={product.albumName}
            price={product.price}
            storageImgUrl={product.storageImgUrl}
            key={product.id}
          />
        ))}
      </Layout>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
