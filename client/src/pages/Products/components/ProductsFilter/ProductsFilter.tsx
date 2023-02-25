import { Menu, Button } from 'antd';
import { FilterCheckbox, MenuItem } from '@pages/Products/components/ProductsFilter/ProductsFilter.styles';
import filterItems from '@pages/Products/components/ProductsFilter/filter-data/filter-data';
import { useAppDispatch, useAppSelector } from '@shared/hooks/dispatch-selector';
import { getFetchProducts } from '@pages/Products/reducer/products-reducer';
import { setFilters } from '@pages/Products/components/ProductsFilter/reducer/filter-reducer';

const ProductsFilter = () => {
  const dispatch = useAppDispatch();
  const selectedFilters = useAppSelector((state) => state.productsFilter);

  const onFilterClick = (filterParent: string, filterItem: string) => {
    dispatch(setFilters({ filterParent, filterItem }));
  };

  const onApplyFilters = () => {};

  return (
    <div>
      <Menu style={{ width: 260 }} mode={'inline'}>
        {filterItems.map((filterParent) => (
          <Menu.SubMenu title={filterParent.label} key={filterParent.id}>
            {filterParent.items.map((subFilterItem) => (
              <MenuItem key={subFilterItem.id}>
                <FilterCheckbox onClick={() => onFilterClick(filterParent.id, subFilterItem.label)}>
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
