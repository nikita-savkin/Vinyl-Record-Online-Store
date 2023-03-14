import styled from 'styled-components';
import { Checkbox, Menu } from 'antd';

export const Filter = styled(Menu)`
  .ant-menu-submenu-title {
    padding: 0 !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const SubMenu = styled(Menu.SubMenu)`
  padding: 0 !important;
`;

export const FilterItem = styled(Menu.Item)`
  padding: 0 !important;
`;

export const FilterCheckbox = styled(Checkbox)`
  width: 100%;
  height: 100%;
  padding: 0 40px;
`;
