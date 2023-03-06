import ProductsFilter from '@pages/Products/components/ProductsFilter/ProductsFilter';
import ProductPreview from '@shared/components/ProductPreview/ProductPreview';
import { ProductsPageWrapper, ProductsFilterWrapper, ProductsListWrapper } from '@pages/Products/ProductsPage.styles';
import { useAppSelector, useAppDispatch } from '@shared/hooks/dispatch-selector';
import { useEffect, useState } from 'react';
import { getFetchProducts, setPage, setLimit } from '@pages/Products/reducer/products-reducer';
import { ProductFull } from '@shared/types/common-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { Pagination } from 'antd';
import qs from 'qs';

const ProductsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { allProducts, isProductsLoading, fetchErrorMessage, currentPage, totalPages, limit } = useAppSelector(
    (state) => state.products,
  );
  const selectedFilters = useAppSelector((state) => state.productsFilter.selectedFilters);

  const ProductsListCondition = (): JSX.Element => {
    if (fetchErrorMessage) return <div>Error</div>;
    if (isProductsLoading) return <div>Loading</div>;

    return (
      <>
        {allProducts?.map((product: ProductFull) => (
          <ProductPreview product={product} key={product.uid} />
        ))}
      </>
    );
  };

  const fetchDataWithSearchParams = () => {
    const urlParams = new URLSearchParams(location.search);
    const queryPage = urlParams.get('page') ?? null;
    const queryLimit = urlParams.get('limit') ?? null;

    if (queryPage) {
      dispatch(setPage(Number(queryPage)));
    }

    if (queryLimit) {
      dispatch(setLimit(Number(queryLimit)));
    }

    updateSearchParamsAndFetchProducts(queryPage, queryLimit);
  };

  const updateSearchParamsAndFetchProducts = (
    pageNew?: number | string | null,
    limitNew?: number | string | null,
    newFilters?: any[],
  ) => {
    const pathname = location.pathname;
    const params = {
      page: pageNew ?? currentPage,
      limit: limitNew ?? limit,
      filters: newFilters ?? selectedFilters,
    };

    navigate({
      pathname,
      search: qs.stringify(params),
    });

    dispatch(getFetchProducts({ params }));
  };

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      fetchDataWithSearchParams();
    } else {
      updateSearchParamsAndFetchProducts();
    }
  }, [currentPage, selectedFilters]);

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
          <Pagination current={currentPage} onChange={handlePageChange} total={totalPages} defaultPageSize={limit} />
        </div>
      </div>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
