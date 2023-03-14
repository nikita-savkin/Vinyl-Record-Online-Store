import { Menu, Button, Slider } from 'antd';
import {
  FilterCheckbox,
  FilterItem,
  SubMenu,
  Filter,
} from '@pages/Products/components/ProductsFilter/ProductsFilter.styles';
import { useAppDispatch, useAppSelector } from '@shared/hooks/dispatch-selector';
import { setFilters, getFilterStructure } from '@pages/Products/components/ProductsFilter/reducer/filter-reducer';
import { useEffect, useState } from 'react';
import type {
  SelectedFiltersType,
  FilterStructureType,
} from '@pages/Products/components/ProductsFilter/types/filter-state.types';
import { setPage } from '@pages/Products/reducer/products-reducer';

const ProductsFilter = () => {
  const dispatch = useAppDispatch();
  const filters: SelectedFiltersType = useAppSelector((state) => state.productsFilter.selectedFilters);
  const filterStructure: FilterStructureType = useAppSelector((state) => state.productsFilter.filterStructure);
  const minPrice = useAppSelector((state) => state.productsFilter.filterStructure.prices.min);
  const maxPrice = useAppSelector((state) => state.productsFilter.filterStructure.prices.max);

  const [selectedFilters, setSelectedFilters] = useState(filters);
  const [minMaxPricesSlider, setMinMaxPricesSlider] = useState<[number, number]>([minPrice, maxPrice]);

  const onFilterClick = (filterParent: keyof SelectedFiltersType, filterItem: string) => {
    setSelectedFilters((selectedFilters) => {
      const prevFilter = selectedFilters[filterParent];

      if (prevFilter !== undefined && Array.isArray(prevFilter)) {
        const filterCopy = [...prevFilter];
        const filterIndex = filterCopy.indexOf(filterItem);

        if (filterCopy.includes(filterItem)) {
          filterCopy.splice(filterIndex, 1);

          if (!filterCopy.length) {
            const selectedFiltersCopy = { ...selectedFilters };
            delete selectedFiltersCopy[filterParent];
            return selectedFiltersCopy;
          }

          return {
            ...selectedFilters,
            [filterParent]: [...filterCopy],
          };
        } else {
          return {
            ...selectedFilters,
            [filterParent]: [...prevFilter, filterItem],
          };
        }
      } else {
        return {
          ...selectedFilters,
          [filterParent]: [filterItem],
        };
      }
    });
  };

  const onApplyFilters = () => {
    const filterResult = { ...selectedFilters, minPrice: minMaxPricesSlider[0], maxPrice: minMaxPricesSlider[1] };
    dispatch(setPage(1));
    dispatch(setFilters(filterResult));
  };

  const handlePriceChange = (values: any) => {
    setMinMaxPricesSlider([values[0], values[1]]);
  };

  useEffect(() => {
    dispatch(getFilterStructure());
  }, []);

  useEffect(() => {
    setMinMaxPricesSlider([filterStructure?.prices?.min, filterStructure?.prices?.max]);
  }, [filterStructure]);

  return (
    <div>
      <Filter style={{ width: 260 }} mode={'inline'}>
        {filterStructure?.tree?.map((filterParent) => (
          <SubMenu title={filterParent.label} key={filterParent.id}>
            {filterParent.items.map((subFilterItem) => (
              <FilterItem key={subFilterItem.id}>
                <FilterCheckbox
                  onClick={() =>
                    onFilterClick(filterParent.id as keyof SelectedFiltersType, subFilterItem.id.toLowerCase())
                  }
                >
                  {subFilterItem.label}
                </FilterCheckbox>
              </FilterItem>
            ))}
          </SubMenu>
        ))}
      </Filter>
      <div>
        <span>Price</span>
        <Slider onChange={handlePriceChange} min={minPrice} max={maxPrice} value={minMaxPricesSlider} step={1} range />
      </div>
      <Button onClick={onApplyFilters}>Apply filters</Button>
    </div>
  );
};

export default ProductsFilter;
