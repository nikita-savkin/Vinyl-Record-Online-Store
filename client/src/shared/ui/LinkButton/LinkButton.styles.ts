import styled from 'styled-components';
import { COLORS } from '@shared/assets/styles/variables-styles';
import { Link } from 'react-router-dom';

export const LinkButtonWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 30px;
  border: none;
  background-color: transparent;
  color: ${COLORS.red};
  cursor: pointer;
  transition: 0.2s;
  padding: 0;
  text-decoration: none;

  &:hover {
    color: ${COLORS['red-dark']};

    g {
      fill: ${COLORS['red-dark']};
    }
  }

  span {
    margin-right: 10px;
  }

  svg {
    width: 20px;
    height: 10px;

    g {
      transition: 0.2s;
      fill: ${COLORS.red};
    }
  }
`;
