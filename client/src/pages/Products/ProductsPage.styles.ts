import styled from 'styled-components';
import { COLORS } from '@shared/assets/styles/variables-styles';
import {
  ProductPreviewWrapper,
  ImageWrapper,
  ImageCover,
} from '@shared/components/ProductPreview/ProductPreview.styles';

export const ProductsPageWrapper = styled.div`
  padding: 20px 0;
  display: flex;
`;

export const ProductsFilterWrapper = styled.div`
  margin-right: 20px;

  h3 {
    color: ${COLORS.red};
  }
`;

export const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  margin-bottom: 50px;

  ${ProductPreviewWrapper} {
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }

    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }

    &:nth-child(3) {
      grid-area: 1 / 3 / 2 / 4;
    }

    &:nth-child(4) {
      grid-area: 2 / 1 / 3 / 2;
    }

    &:nth-child(5) {
      grid-area: 2 / 2 / 4 / 4;

      ${ImageWrapper} {
        aspect-ratio: auto;
        height: 100%;
      }

      ${ImageCover} {
        width: 78%;
        height: 65%;
        top: 0;
        left: 0;
        transform: translate(2%, 31%);
      }
    }

    &:nth-child(6) {
      grid-area: 3 / 1 / 4 / 2;
    }
  }
`;

export const PaginationBlock = styled.div`
  display: flex;
  justify-content: center;

  .ant-pagination-item-active {
    border-color: ${COLORS.red};

    a {
      color: ${COLORS.red};
    }
  }
`;

export const SortingSelectWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  .ant-select-selector {
    border: 1px solid #ff9f9f !important;
  }

  > div {
    > span {
      margin-right: 10px;
      color: ${COLORS.red};
    }
  }
`;
