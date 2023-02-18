import { Outlet } from 'react-router-dom';
import Header from '@widgets/Header/Header';
import Cart from '@widgets/Cart/Cart';
import { GlobalStyles, Container, Layout } from './App.styles';
import { useEffect } from 'react';
import products from '@shared/mocks/products';
import { addProductsToStorage } from '@shared/firebase/utils/products-utils';

const App = () => {
  // useEffect(() => {
  //   addProductsToStorage('music', products);
  // }, []);

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
