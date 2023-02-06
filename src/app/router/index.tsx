import { createBrowserRouter } from 'react-router-dom';
import App from '@app/App';
import Home from '@pages/Home/Home';
import Products from '@pages/Products/ProductsPage';
import Auth from '@pages/AuthPage/Auth';
import ProductCard from '@pages/ProductCard/ProductCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Auth />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'product/:id',
        element: <ProductCard />,
      },
    ],
  },
]);

export default router;
