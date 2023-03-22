import { Slider } from 'antd';
import {
  FilterCheckbox,
  FilterItem,
  SubMenu,
  Filter,
  PriceSliderBlock,
} from '@pages/Products/components/ProductsFilter/ProductsFilter.styles';
import CommonButton from '@shared/ui/CommonButton/CommonButton';
import { useAppDispatch, useAppSelector } from '@shared/hooks/dispatch-selector';
import { setFilters, getFilterStructure } from '@pages/Products/components/ProductsFilter/reducer/filter-reducer';
import { useEffect, useState } from 'react';
import type {
  SelectedFiltersType,
  FilterStructureType,
} from '@pages/Products/components/ProductsFilter/types/filter-state.types';
import { setPage } from '@pages/Products/reducer/products-reducer';
import type { SliderMarks } from 'antd/es/slider';
import { COLORS } from '@shared/assets/styles/variables-styles';

const ProductsFilter = () => {
  const dispatch = useAppDispatch();
  const filters: SelectedFiltersType = useAppSelector((state) => state.productsFilter.selectedFilters);
  const filterStructure: FilterStructureType = useAppSelector((state) => state.productsFilter.filterStructure);
  const minPrice = useAppSelector((state) => state.productsFilter.filterStructure.prices.min);
  const maxPrice = useAppSelector((state) => state.productsFilter.filterStructure.prices.max);

  const [selectedFilters, setSelectedFilters] = useState(filters);
  const [minMaxPricesSlider, setMinMaxPricesSlider] = useState<[number, number]>([minPrice, maxPrice]);
  const [sliderMarks, setSliderMarks] = useState<SliderMarks>({});

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
    const minPrice = filterStructure?.prices?.min;
    const maxPrice = filterStructure?.prices?.max;

    if (minPrice && maxPrice) {
      setMinMaxPricesSlider([minPrice, maxPrice]);
      setSliderMarks({
        [minPrice]: `${minPrice.toString()}\u20ac`,
        [maxPrice]: `${maxPrice.toString()}\u20ac`,
      });
    }
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
      <PriceSliderBlock>
        <h5>Price</h5>
        <Slider
          onChange={handlePriceChange}
          min={minPrice}
          max={maxPrice}
          value={minMaxPricesSlider}
          step={1}
          marks={sliderMarks}
          trackStyle={[{ backgroundColor: COLORS.red }]}
          range
        />
      </PriceSliderBlock>
      <CommonButton onClick={onApplyFilters}>Apply Filters</CommonButton>
    </div>
  );
};

export default ProductsFilter;
