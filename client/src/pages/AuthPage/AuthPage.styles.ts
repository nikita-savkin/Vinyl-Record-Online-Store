import styled from 'styled-components';
import { COLORS } from '@shared/assets/styles/variables-styles';

export const AuthPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;

  .ant-btn-primary {
    background-color: ${COLORS.red};
  }

  .ant-btn-primary:hover {
    background-color: ${COLORS['red-dark']};
  }

  .ant-btn-default:hover {
    color: ${COLORS['red-dark']};
    border-color: ${COLORS['red-dark']};
  }
`;
