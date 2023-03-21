import styled from 'styled-components';
import { Checkbox, Menu } from 'antd';
import { COLORS } from '@shared/assets/styles/variables-styles';

export const Filter = styled(Menu)`
  border-inline-end: none !important;
  margin-bottom: 20px;

  .ant-menu-submenu-title {
    padding-left: 10px;
  }

  .ant-menu-submenu-selected {
    color: ${COLORS.red} !important;
  }

  .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: ${COLORS.red} !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${COLORS.red} !important;
    border-color: ${COLORS.red} !important;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-checked:after {
    border-color: ${COLORS.red} !important;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${COLORS.red} !important;
  }
`;

export const SubMenu = styled(Menu.SubMenu)`
  padding: 0 !important;
  border-radius: 0 !important;
  border-bottom: 1px solid #eaeaea;
`;

export const FilterItem = styled(Menu.Item)`
  padding: 0 !important;
`;

export const FilterCheckbox = styled(Checkbox)`
  width: 100%;
  height: 100%;
  padding: 0 40px;
`;

export const PriceSliderBlock = styled.div`
  margin-bottom: 45px;

  h5 {
    font-weight: 600;
    font-size: 16px;
    margin: 0 0 10px 0;
  }

  .ant-slider-handle {
    &:after {
      box-shadow: 0 0 0 2px #e55e56 !important;
    }

    &:focus::after,
    &:hover::after {
      box-shadow: 0 0 0 4px #e55e56 !important;
    }
  }
`;
