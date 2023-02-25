import ProductsFilter from '@pages/Products/components/ProductsFilter/ProductsFilter';
import ProductPreview from '@shared/components/ProductPreview/ProductPreview';
import { ProductsPageWrapper, ProductsFilterWrapper, ProductsListWrapper } from '@pages/Products/ProductsPage.styles';
import { useAppSelector, useAppDispatch } from '@shared/hooks/dispatch-selector';
import { useEffect } from 'react';
import { getFetchProducts } from '@pages/Products/reducer/products-reducer';
import { ProductFull } from '@shared/types/common-types';
import { Button } from 'antd';
import { fetchProducts } from '@shared/api';

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { allProducts, isProductsLoading, fetchErrorMessage, firstVisibleId, lastVisibleId, currentPage, totalPages } =
    useAppSelector((state) => state.products);

  const ProductsListCondition = (): JSX.Element => {
    if (fetchErrorMessage) return <div>Error</div>;
    if (isProductsLoading) return <div>Loading</div>;

    return (
      <>
        {allProducts.map((product: ProductFull) => {
          return <ProductPreview product={product} key={product.uid} />;
        })}
      </>
    );
  };

  const dispatchProductsPayload = (directionType: 'next' | 'prev' | null) => {
    // dispatch(getFetchProducts({ firstVisibleId, lastVisibleId, directionType, selectedFilters: {} }));
  };

  useEffect(() => {
    const products = async () => {
      const yo = await fetchProducts();
      console.log(yo);
    };

    // yo();

    // dispatchProductsPayload(null);
  }, []);

  return (
    <ProductsPageWrapper>
      <ProductsFilterWrapper>
        <h3>Filters</h3>
        <ProductsFilter />
      </ProductsFilterWrapper>
      <div>
        <ProductsListWrapper>
          <ProductsListCondition />
        </ProductsListWrapper>
        <div>
          <Button onClick={() => dispatchProductsPayload('prev')} disabled={currentPage === 1}>
            Prev
          </Button>
          <Button onClick={() => dispatchProductsPayload('next')} disabled={currentPage === totalPages}>
            Next
          </Button>
        </div>
      </div>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
