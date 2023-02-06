import styled from 'styled-components';
import { COLORS } from '@shared/styles/variables-styles';

export const LinkButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  height: 30px;
  border: none;
  background-color: transparent;
  color: ${COLORS.red};
  cursor: pointer;
  transition: 0.2s;
  padding: 0;

  &:hover {
    color: ${COLORS['red-light']};

    g {
      fill: ${COLORS['red-light']};
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
