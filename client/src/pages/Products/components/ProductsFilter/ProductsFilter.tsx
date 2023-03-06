import { Menu, Button } from 'antd';
import { FilterCheckbox, MenuItem } from '@pages/Products/components/ProductsFilter/ProductsFilter.styles';
import filterItems from '@pages/Products/components/ProductsFilter/filter-data/filter-data';
import { useAppDispatch, useAppSelector } from '@shared/hooks/dispatch-selector';
import { setFilters } from '@pages/Products/components/ProductsFilter/reducer/filter-reducer';
import { useState } from 'react';
import type { SelectedFiltersType } from '@pages/Products/components/ProductsFilter/types/filter-state.types';

const ProductsFilter = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.productsFilter.selectedFilters);
  const [selectedFilters, setSelectedFilters] = useState(filters);

  const onFilterClick = (filterParent: keyof SelectedFiltersType, filterItem: string) => {
    setSelectedFilters((selectedFilters) => {
      const prevFilter = selectedFilters[filterParent];

      if (prevFilter !== undefined) {
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
    dispatch(setFilters(selectedFilters));
  };

  return (
    <div>
      <Menu style={{ width: 260 }} mode={'inline'}>
        {filterItems.map((filterParent) => (
          <Menu.SubMenu title={filterParent.label} key={filterParent.id}>
            {filterParent.items.map((subFilterItem) => (
              <MenuItem key={subFilterItem.id}>
                <FilterCheckbox
                  onClick={() =>
                    onFilterClick(filterParent.id as keyof SelectedFiltersType, subFilterItem.id.toLowerCase())
                  }
                >
                  {subFilterItem.label}
                </FilterCheckbox>
              </MenuItem>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
      <Button onClick={onApplyFilters}>Apply filters</Button>
    </div>
  );
};

export default ProductsFilter;
