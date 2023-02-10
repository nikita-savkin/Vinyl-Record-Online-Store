import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UserProvider } from '@shared/context/user-context/user-context';
import { ProductsProvider } from '@shared/context/products-context/products-context';
import router from '@app/router';
import store from '@shared/store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>,
);
