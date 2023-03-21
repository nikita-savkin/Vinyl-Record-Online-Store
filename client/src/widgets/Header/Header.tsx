import { Link, createSearchParams } from 'react-router-dom';
import navigation from '@widgets/Header/navigation';
import { userSignOut } from '@widgets/Header/service/signout-service';
import { toggleCart } from '@widgets/Cart/reducer/cart-reducer';
import { useFetchUserQuery } from '@pages/AuthPage/reducer/user-reducer';
import { useNavigate } from 'react-router-dom';
import { Badge, Avatar, Tooltip } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import { HeaderWrapper, Logo, Navigation, NavButton, UserControl } from '@widgets/Header/Header.styles';
import { useAppDispatch, useAppSelector } from '@shared/hooks/dispatch-selector';

const Header = () => {
  const dispatch = useAppDispatch();
  const selectedProducts = useAppSelector((state) => state.cart.selectedProducts);
  const userQuery = useFetchUserQuery();
  const navigate = useNavigate();
  const currentUser = userQuery.data;

  const onSignOut = async () => {
    try {
      await userSignOut();
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  const onCartHandle = () => {
    dispatch(toggleCart(true));
  };

  const handleNavigation = (nav: { id: string; name: string; link: string }) => {
    const navSettings = { pathname: nav.link, search: '' };
    const params = {
      page: '1',
      limit: '9',
    };

    if (nav.id === 'products') {
      navSettings.search = createSearchParams(params).toString();
    }

    navigate(navSettings);
  };

  return (
    <HeaderWrapper>
      <Logo to='/'>
        <img src='/img/logo.png' alt='logo' />
      </Logo>
      <Navigation>
        {navigation.map((btn) => {
          return (
            <NavButton onClick={() => handleNavigation(btn)} key={btn.id}>
              {btn.name.toUpperCase()}
            </NavButton>
          );
        })}
      </Navigation>
      <UserControl>
        {!currentUser ? (
          <Link to='/login'>
            <UserOutlined style={{ fontSize: '30px', color: '#000' }} />
          </Link>
        ) : (
          <Tooltip placement='bottom' title={'Sign Out'}>
            <span className='user-email' onClick={onSignOut}>
              {currentUser.email}
            </span>
          </Tooltip>
        )}
        <Badge onClick={onCartHandle} size='default' count={selectedProducts?.length}>
          <Avatar
            shape='square'
            size={30}
            style={{ backgroundColor: '#fff', cursor: 'pointer' }}
            icon={<ShoppingCartOutlined style={{ fontSize: '30px', color: '#000' }} />}
          />
        </Badge>
      </UserControl>
    </HeaderWrapper>
  );
};

export default Header;
