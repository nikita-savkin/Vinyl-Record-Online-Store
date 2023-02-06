import styled from 'styled-components';
import { COLORS } from '@shared/styles/variables-styles';

export const StartedBannerWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 150px);
  background-color: #171718;
  margin-bottom: 100px;
`;

export const BannerLeft = styled.div`
  height: 100%;
  flex-basis: 35%;

  img {
    object-fit: cover;
  }
`;

export const BannerRight = styled.div`
  position: absolute;
  width: 35%;
  top: 0;
  right: 0;
`;

export const Info = styled.div`
  flex-basis: 65%;
  margin-top: auto;
  padding: 40px;
  color: #fff;

  h1 {
    text-transform: uppercase;
    font-size: 70px;
    margin-bottom: 20px;
  }

  p {
    width: 60%;
    color: ${COLORS.red};
    margin-bottom: 20px;
  }
`;
