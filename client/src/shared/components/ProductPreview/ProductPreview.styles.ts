import styled from 'styled-components';
import { COLORS } from '@shared/assets/styles/variables-styles';
import { Link } from 'react-router-dom';

export const ProductPreviewWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  margin-bottom: 10px;
`;

export const ImageTemplate = styled.img`
  object-fit: cover;
`;

export const ImageCover = styled.img`
  position: absolute;
  width: 65%;
  height: 65%;
  top: 0;
  left: 0;
  transform: translate(14%, 31%);
  object-fit: cover;
`;

export const ProductName = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: #000;
  margin: 0 10px;

  h4,
  h5 {
    margin: 0 0 10px 0;
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }
`;

export const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
  color: ${COLORS['grey-light']};
`;
