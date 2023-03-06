import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: relative;
  height: 60px;
  max-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 5px 0;
  margin-bottom: 30px;
`;

export const Logo = styled(Link)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Navigation = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavButton = styled.div`
  font-size: 18px;
  padding: 0 20px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
`;

export const UserControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div,
  a {
    width: 30px;
    height: 30px;
  }

  a:first-child {
    margin-right: 20px;
  }
`;
