import { Outlet } from 'react-router-dom';
import Header from '@widgets/Header/Header';
import Cart from '@widgets/Cart/Cart';

import { GlobalStyles, Container, Layout } from './App.styles';

const App = () => {
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
