import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from '@shared/context/user-context/user-context';
import { ProductsProvider } from '@shared/context/products-context/products-context';
import { CartProvider } from '@shared/context/cart-context/cart-context';
import router from '@app/router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>,
);
