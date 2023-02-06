import styled from 'styled-components';
import { COLORS } from '@shared/styles/variables-styles';
import { Link } from 'react-router-dom';

export const ProductPreviewWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  margin-top: auto;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${COLORS['grey-light']};
`;
