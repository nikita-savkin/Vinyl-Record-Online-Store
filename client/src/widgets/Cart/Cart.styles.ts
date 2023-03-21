import styled from 'styled-components';
import { COLORS } from '@shared/assets/styles/variables-styles';

interface CartWrapperProps {
  showCart?: boolean;
}

export const CartBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #353535;
  opacity: 0.5;
  z-index: 1;
  animation-name: fadeIn;
  animation-duration: 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const CartWrapper = styled.div<CartWrapperProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 100vh;
  background-color: #fff;
  padding: 20px 25px;
  transition: 0.3s;
  z-index: 2;
  box-shadow: 0 0 10px 3px rgba(134, 134, 134, 0.6);
  overflow: hidden;
  transform: translateX(0);
  animation-name: transformIn;
  animation-duration: 0.5s;

  @keyframes transformIn {
    0% {
      transform: translateX(110%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffd6d6;
  padding-bottom: 20px;
`;

export const EmptyCartMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
`;

export const ProductsCartList = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  overflow-y: scroll;
  padding: 15px 0;
`;

export const CartTotalBlock = styled.div`
  height: 140px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${COLORS.red};
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
