import ProductsFilter from '@pages/Products/components/ProductsFilter/ProductsFilter';
import ProductPreview from '@shared/components/ProductPreview/ProductPreview';
import {
  AllProducts,
  ProductsPageWrapper,
  ProductsFilterWrapper,
  ProductsListWrapper,
  PaginationBlock,
  SortingSelectWrapper,
  ProductsListStatus,
} from '@pages/Products/ProductsPage.styles';
import { useAppSelector, useAppDispatch } from '@shared/hooks/dispatch-selector';
import { useEffect, useState } from 'react';
import { getFetchProducts, setPage, setLimit, setSorting } from '@pages/Products/reducer/products-reducer';
import { ProductFull } from '@shared/types/common-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { Pagination, Select } from 'antd';
import { SORTING_OPTIONS } from '@pages/Products/constants';
import qs from 'qs';
import { Spin } from 'antd/lib';

const ProductsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { allProducts, isProductsLoading, fetchErrorMessage, currentPage, totalPages, limit, sorting } = useAppSelector(
    (state) => state.products,
  );
  const selectedFilters = useAppSelector((state) => state.productsFilter.selectedFilters);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [selectedSortingValue, setSelectedSortingValue] = useState(SORTING_OPTIONS[0]?.value ?? null);

  const ProductsListCondition = (): JSX.Element => {
    const fetchError = 'Something went wrong, please reload page';
    const notFoundMessage = 'Nothing found, please change filters';

    if (isProductsLoading)
      return (
        <>
          <ProductsListStatus>
            <Spin size='large' />
          </ProductsListStatus>
        </>
      );

    if (!allProducts?.length) return <ProductsListStatus>{fetchError}</ProductsListStatus>;
    if (fetchErrorMessage) return <ProductsListStatus>{notFoundMessage}</ProductsListStatus>;

    return (
      <>
        <ProductsListWrapper>
          {allProducts?.map((product: ProductFull) => (
            <ProductPreview product={product} key={product._id} />
          ))}
        </ProductsListWrapper>
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
    sortingNew?: string,
    filtersNew?: any[],
  ) => {
    const pathname = location.pathname;
    const params = {
      page: pageNew ?? currentPage,
      limit: limitNew ?? limit,
      sorting: sortingNew ?? sorting,
      filters: filtersNew ?? selectedFilters,
    };

    navigate({
      pathname,
      search: qs.stringify(params),
    });

    dispatch(getFetchProducts({ params }));
  };

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
    window.scrollTo(0, 0);
  };

  const handleSortingChange = (value: string) => {
    setSelectedSortingValue(value);
    const selectedSorting = SORTING_OPTIONS.find((option) => option.value === value);
    if (selectedSorting?.value && selectedSorting?.direction)
      dispatch(setSorting({ sortBy: selectedSorting.sortBy, direction: selectedSorting.direction }));
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      fetchDataWithSearchParams();
    } else {
      updateSearchParamsAndFetchProducts();
    }
  }, [selectedFilters, selectedSortingValue, currentPage]);

  return (
    <div>
      <SortingSelectWrapper>
        <div>
          <span>Sort by</span>
          <Select
            onChange={handleSortingChange}
            value={selectedSortingValue}
            options={SORTING_OPTIONS}
            style={{ width: 200 }}
          />
        </div>
      </SortingSelectWrapper>
      <ProductsPageWrapper>
        <ProductsFilterWrapper>
          <h3>Filters</h3>
          <ProductsFilter />
        </ProductsFilterWrapper>
        <AllProducts>
          <ProductsListCondition />
          <PaginationBlock>
            <Pagination
              hideOnSinglePage
              current={currentPage}
              onChange={handlePageChange}
              total={totalPages}
              defaultPageSize={limit}
            />
          </PaginationBlock>
        </AllProducts>
      </ProductsPageWrapper>
    </div>
  );
};

export default ProductsPage;
