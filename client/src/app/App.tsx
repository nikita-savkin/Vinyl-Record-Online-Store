import { Outlet } from 'react-router-dom';
import Header from '@widgets/Header/Header';
import Cart from '@widgets/Cart/Cart';
import { GlobalStyles, Container, Layout } from './App.styles';
import { useAppSelector } from '@shared/hooks/dispatch-selector';
import { useEffect } from 'react';

const App = () => {
  const showCart = useAppSelector((state) => state.cart.showCart);

  useEffect(() => {
    document.body.style.overflow = showCart ? 'hidden' : 'auto';
  }, [showCart]);

  return (
    <>
      <GlobalStyles />
      <div className='app'>
        <Layout>
          <Container>
            <Header />
            <Outlet />
          </Container>
        </Layout>
        {showCart && <Cart />}
      </div>
    </>
  );
};

export default App;
