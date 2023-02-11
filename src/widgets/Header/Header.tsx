import { Link } from 'react-router-dom';
import ShoppingCartSvg from '@shared/assets/icons/ShoppingCartSvg';
import UserSvg from '@shared/assets/icons/UserSvg';
import navigation from '@widgets/Header/navigation';
import { userSignOut } from '@widgets/Header/service/signout-service';
import { toggleCart } from '@widgets/Cart/reducer/cart-reducer';

import { HeaderWrapper, Logo, Navigation, NavButton, UserControl } from '@widgets/Header/Header.styles';
import { useAppDispatch, useAppSelector } from '@shared/hooks/dispatch-selector';

const Header = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

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

  return (
    <HeaderWrapper>
      <Logo to='/'>
        <img src='/img/logo.png' alt='logo' />
      </Logo>
      <Navigation>
        {navigation.map((btn) => {
          return (
            <NavButton to={btn.link} key={btn.id}>
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
