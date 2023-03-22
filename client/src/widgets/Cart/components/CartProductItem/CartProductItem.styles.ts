import styled from 'styled-components';

export const CartProductItemWrapper = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #cacaca;
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

  > span {
    display: block;
    margin-top: auto;
  }
`;

export const DescrTop = styled.div`
  display: flex;
  justify-content: space-between;

  h6 {
    margin: 0 0 10px 0;
    display: block;
    font-weight: 600;
    font-size: 17px;
  }

  .anticon-close-circle {
    width: 20px;
    height: 20px;
  }
`;
