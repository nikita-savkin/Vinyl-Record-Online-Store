import { Outlet } from 'react-router-dom';
import Header from '@widgets/Header/Header';
import Cart from '@widgets/Cart/Cart';
import { useState } from 'react';

import { GlobalStyles, Container, Layout } from './App.styles';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = (value: boolean) => {
    setShowCart(value);
  };

  return (
    <>
      <GlobalStyles />
      <div className='app'>
        <Layout>
          <Container>
            <Header toggleCart={toggleCart} />
            <Outlet />
          </Container>
          <Cart showCart={showCart} toggleCart={toggleCart} />
        </Layout>
      </div>
    </>
  );
};

export default App;
