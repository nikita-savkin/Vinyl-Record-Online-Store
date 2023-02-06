import React from 'react';
import { Menu, Checkbox } from 'antd';

import filterItems from '@pages/Products/components/ProductsFilter/filter-data/filter-data';

const ProductsFilter: React.FC = () => {
  const onClick = () => {
    console.log('click ');
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 260 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode={'inline'}
    >
      {filterItems.map((filterParent) => (
        <Menu.SubMenu title={filterParent.label} key={filterParent.key}>
          {filterParent.items.map((subFilterItem) => (
            <Menu.Item key={subFilterItem.key}>
              <Checkbox>{subFilterItem.label}</Checkbox>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};

export default ProductsFilter;
