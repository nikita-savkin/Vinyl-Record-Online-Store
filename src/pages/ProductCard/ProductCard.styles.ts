import styled from 'styled-components';
import { COLORS } from '@shared/assets/styles/variables-styles';

export const ProductCardWrapper = styled.div`
  display: flex;
`;

export const Cover = styled.div`
  width: 40%;
  margin-right: 30px;

  img {
    aspect-ratio: 1/1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0 0 20px 0;
    font-size: 47px;
    text-transform: uppercase;
  }

  > span {
    margin-bottom: 20px;
    color: ${COLORS['grey-light']};
    font-size: 25px;
  }

  p {
    margin: 0 0 20px 0;
    color: ${COLORS['grey-light']};
    font-size: 18px;
  }
`;

export const ButtonsWrapper = styled.div`
  button {
    &:first-child {
      margin-right: 10px;
    }
  }
`;
