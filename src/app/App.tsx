import { Outlet } from 'react-router-dom';
import Header from '@widgets/Header/Header';
import Cart from '@widgets/Cart/Cart';
import { fetchUser } from '@pages/AuthPage/reducer/user-reducer';
import { fetchProducts } from '@pages/Products/reducer/products-reducer';

import { GlobalStyles, Container, Layout } from './App.styles';
import { useEffect } from 'react';
import { useAppDispatch } from '@shared/hooks/dispatch-selector';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className='app'>
        <Layout>
          <Container>
            <Header />
            <Outlet />
          </Container>
          <Cart />
        </Layout>
      </div>
    </>
  );
};

export default App;
