import { Link, createSearchParams } from 'react-router-dom';
import ShoppingCartSvg from '@shared/assets/icons/ShoppingCartSvg';
import UserSvg from '@shared/assets/icons/UserSvg';
import navigation from '@widgets/Header/navigation';
import { userSignOut } from '@widgets/Header/service/signout-service';
import { toggleCart } from '@widgets/Cart/reducer/cart-reducer';
import { useFetchUserQuery } from '@pages/AuthPage/reducer/user-reducer';
import { useNavigate } from 'react-router-dom';

import { HeaderWrapper, Logo, Navigation, NavButton, UserControl } from '@widgets/Header/Header.styles';
import { useAppDispatch } from '@shared/hooks/dispatch-selector';

const Header = () => {
  const dispatch = useAppDispatch();
  const userQuery = useFetchUserQuery();
  const navigate = useNavigate();
  const currentUser = userQuery.data;

  const onSignOut = async () => {
    try {
      await userSignOut();
      // TODO убрать все алерты
      alert('SignOut complete');
    } catch (e) {
      console.error(e);
      alert('SignOut error');
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
            <UserSvg />
          </Link>
        ) : (
          <div onClick={onSignOut}>Sign Out</div>
        )}
        <div onClick={onCartHandle}>
          <ShoppingCartSvg />
        </div>
      </UserControl>
    </HeaderWrapper>
  );
};

export default Header;
