import styled from 'styled-components';
import { COLORS } from '@shared/assets/styles/variables-styles';

export const ProductCardWrapper = styled.div`
  display: flex;

  .ant-spin-dot-item {
    background-color: ${COLORS.red};
  }
`;

export const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 40%;
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

  .genre-block {
    margin-bottom: 30px;
  }

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
    width: 200px;

    &:first-child {
      margin-right: 10px;
    }
  }
`;

export const GenreItem = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcdcdc;
  border-radius: 20px;
  padding: 7px 20px;
  color: ${COLORS.red};
  margin-right: 15px;
`;
