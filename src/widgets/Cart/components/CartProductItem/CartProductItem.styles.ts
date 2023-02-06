import styled from 'styled-components';

export const CartProductItemWrapper = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const PoductImage = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DescrTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
