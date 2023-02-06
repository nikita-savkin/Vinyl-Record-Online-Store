import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ShoppingCartSvg from '@shared/icons/ShoppingCartSvg';
import UserSvg from '@shared/icons/UserSvg';
import navigation from '@widgets/Header/navigation';
import { UserContext } from '@shared/context/user-context/user-context';
import { userSignOut } from '@widgets/Header/service/signout-service';

import { HeaderWrapper, Logo, Navigation, NavButton, UserControl } from '@widgets/Header/Header.styles';

const Header = ({ toggleCart }: { toggleCart: CallableFunction }) => {
  const { currentUser } = useContext(UserContext);

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
    toggleCart(true);
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
