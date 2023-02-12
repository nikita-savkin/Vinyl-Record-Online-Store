import ProductsFilter from '@pages/Products/components/ProductsFilter/ProductsFilter';
import ProductPreview from '@shared/components/ProductPreview/ProductPreview';
import { ProductsPageWrapper, ProductsFilterWrapper, Layout } from '@pages/Products/ProductsPage.styles';
import { useFetchProductsQuery } from '@pages/Products/reducer/products-reducer';

const ProductsPage = () => {
  const { data = [], isLoading } = useFetchProductsQuery();

  return (
    <ProductsPageWrapper>
      <ProductsFilterWrapper>
        <h3>Filters</h3>
        <ProductsFilter />
      </ProductsFilterWrapper>
      <Layout>
        {!isLoading ? (
          data.map((product) => (
            <ProductPreview
              id={product.id}
              author={product.author}
              albumName={product.albumName}
              price={product.price}
              storageImgUrl={product.storageImgUrl}
              key={product.id}
            />
          ))
        ) : (
          <div>Loading</div>
        )}
      </Layout>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
