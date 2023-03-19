import styled from 'styled-components';
import { Button } from 'antd';
import { COLORS } from '@shared/assets/styles/variables-styles';

export const ButtonStyled = styled(Button)`
  width: 100%;
  background-color: ${COLORS.red};
  border-radius: 25px;
  border: none;
  color: #fff;
  box-shadow: 0 5px 20px -3px ${COLORS.red};
  transition: 0.4s;

  &:hover {
    background-color: ${COLORS['red-dark']};
    box-shadow: 0 5px 20px -3px ${COLORS['red-dark']} !important;
    color: #fff !important;
  }
`;
